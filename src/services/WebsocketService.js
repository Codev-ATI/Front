import SockJS from "sockjs-client"
import Stomp from "webstomp-client"
import Vue from "vue"

class WebsocketService {

    static instance = null;

    webSocket = null;
    stompClient = null;
    topic = null;

    roomId = null;
    userId = null;

    onPlayers = null;
    onQuestion = null;
    onAnswer = null;
    onStats = null;

    static async getInstance(roomId, userId) {
        if (this.instance != null && roomId == this.instance.roomId) {
            return WebsocketService.instance;
        }

        WebsocketService.instance = new WebsocketService();
        await this.instance.connect(roomId, userId);

        return this.instance;
    }

    close() {
        this.stompClient.unsubscribe();
        this.stompClient.disconnect(() => {}, {});
        this.webSocket.close();

        this.stompClient = null;
        this.webSocket = null;
        WebsocketService.instance = null;
    }

    async connect(roomId, userId) {
        this.userId = userId;
        this.roomId = roomId;

        this.webSocket = await new SockJS(Vue.prototype.host + "/rooms/");
        this.stompClient = await Stomp.over(this.webSocket);

        this.stompClient.connect({}, () => {
            this.topic = this.stompClient.subscribe('/topic/players/' + this.roomId, function (message) {
                if (WebsocketService.instance.onPlayers != null) WebsocketService.instance.onPlayers(JSON.parse(message.body));
                //console.log(message);
            });

            this.topic = this.stompClient.subscribe('/topic/questions/' + this.roomId, function (message) {
                if (WebsocketService.instance.onQuestion != null) WebsocketService.instance.onQuestion(JSON.parse(message.body));
                //console.log(message);
            });

            this.topic = this.stompClient.subscribe('/topic/answers/' + this.roomId, function (message) {
                if (WebsocketService.instance.onAnswer != null) WebsocketService.instance.onAnswer(JSON.parse(message.body));
                //console.log(message);
            });

            this.topic = this.stompClient.subscribe('/topic/stats/' + this.roomId, function (message) {
                if (WebsocketService.instance.onStats != null) WebsocketService.instance.onStats(JSON.parse(message.body));
                console.log(message);
            });

            this.getPlayersStatus();
        });
    }

    getPlayersStatus() {
        this.stompClient.send("/app/rooms/status/" + this.roomId, {}, "get players status");
    }

    sendReady() {
        this.stompClient.send("/app/rooms/ready/" + this.roomId, this.userId, {});
    }

    sendResponse(questionId, responseId) {
        this.stompClient.send("/app/rooms/answer/" + this.roomId, JSON.stringify({ id: this.userId, questionId: questionId, answer: responseId }), {});
    }
}

export default WebsocketService;