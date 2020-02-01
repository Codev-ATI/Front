import WebsocketService from "./WebsocketService";
import GameService from "./GameService";

class RoomService {

    static instance = null;

    roomId = null;
    userId = null;
    userName = null;

    static async disconnect() {
        if (RoomService.instance == null) return;

        WebsocketService.instance.close();
        this.instance = null;
    }

    static async createRoom(quiz, userName) {
        this.disconnect();

        let result = await GameService.createGame(quiz);
        if (result == null) {
            // error
            return null;
        }

        return this.joinRoom(result, userName);
    }

    static async joinRoom(roomId, userName) {
        this.disconnect();

        let result = await GameService.joinGame(roomId, userName);
        if (result == null) {
            // error
            return null;
        }

        RoomService.instance = new RoomService();
        this.instance.roomId = roomId;
        this.instance.userName = userName;
        this.instance.userId = result.id;


        await WebsocketService.getInstance(this.instance.roomId, this.instance.userId);
    }

}

export default RoomService;