import SockJS from "sockjs-client"
import Stomp from "webstomp-client"
import {Subject} from "rxjs";

class WebsocketService {

    quiz = new Subject();

    webSocket = null;
    stompClient = null;
    roomId = null;

    constructor(roomId, userId) {
        this.roomId = roomId;

        this.webSocket = new SockJS('http://localhost:8080/rooms');
        this.stompClient = Stomp.over(this.webSocket);

        this.stompClient.connect({}, () => {

            console.log('Connected');

            this.stompClient.subscribe('/topic/messages', function (message) {
                if (this != null && message != null) {
                    this.computeMessage(JSON.parse(message.body));
                }
            })

            let message = {"roomId": roomId, "userId": userId}

            this.stompClient.send("/app/rooms/join", JSON.stringify(message), {});
        })
    }

    observeQuizz() {
        return this.quiz;
    }

    computeMessage(message) {

        this.quiz.next(message);
    }
}

export default WebsocketService;