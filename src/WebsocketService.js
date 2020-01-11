class WebsocketService {

    webSocket = null;

    onError(error) {
        console.error(error);
    }

    onMessage(message) {
        console.log(message);
    }

    constructor(adress) {
        this.webSocket = new WebSocket("ws://" + adress);

        this.webSocket.onopen = (event) => {
            console.log(event);
            this.webSocket.send("yo");
        }

        this.webSocket.onerror = this.onError;
        this.webSocket.onmessage = this.onMessage;
    }

    sendMessage(message) {
        this.webSocket.send(message);
    }
}

export default WebsocketService;