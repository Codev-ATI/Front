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

    onMessage = null;


    static async getInstance(roomId, userId) {
        if (this.instance != null && roomId == this.instance.roomId) {
            return WebsocketService.instance;
        }

        WebsocketService.instance = new WebsocketService();
        await this.instance.connect(roomId, userId);

        return this.instance;
    }

    setMessageListener(listener) {
        this.onMessage = listener;
    }

    sendMessageJoin() {
        let message = {"roomId": this.roomId, "userId": this.userId};
        this.stompClient.send("/app/rooms", JSON.stringify(message), {});
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

        this.webSocket = await new SockJS(Vue.prototype.host + "/rooms");
        this.stompClient = Stomp.over(this.webSocket);

        this.stompClient.connect({}, () => {
            this.topic = this.stompClient.subscribe('/topic/messages', function (message) {
                if (this.onMessage != null) this.onMessage(message);
                console.log(message);
            });
        })
    }
}

export default WebsocketService;