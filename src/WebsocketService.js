import SockJS from "sockjs-client"
import Stomp from "webstomp-client"
import {Subject} from "rxjs";

class WebsocketService {

    userId = null

    quiz = new Subject();

    webSocket = null;
    stompClient = null;
    roomId = null;

    constructor(roomId, userId) {
        this.roomId = roomId;
        this.userId = userId

        this.webSocket = new SockJS('http://localhost:8080/rooms');
        this.stompClient = Stomp.over(this.webSocket);

        this.stompClient.connect({}, () => {

            console.log('Connected');

            this.stompClient.subscribe('/topic/messages/' + roomId, function (message) {
                if (this != null && message != null) {
                    this.computeMessage(JSON.parse(message.body));
                }
            })

            this.stompClient.send("/app/rooms/join/" + roomId, userId, {});
        })
    }

    observeQuizz() {
        return this.quiz;
    }

    computeMessage(message) {

        this.quiz.next(message);
    }

    ready() {
        this.stompClient.send("/app/rooms/ready/" + this.roomId, this.userId, {});
    }

    question1() {
        var msg = {'pseudo': 'ABC', 'questionId': 1, 'answer': 1}
        this.stompClient.send("/app/rooms/answer/" + this.roomId, JSON.stringify(msg), {});
    }

    question2() {
        var msg = {'pseudo': 'ABC', 'questionId': 2, 'answer': 1}
        this.stompClient.send("/app/rooms/answer/" + this.roomId, JSON.stringify(msg), {});
    }
}

export default WebsocketService;