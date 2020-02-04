import WebsocketService from "./WebsocketService";
import GameService from "./GameService";
import Player from "../objects/Player";
import Question from "../objects/Question";
import Vue from "vue";
import Response from "../objects/Response";

class RoomService {

    static instance = null;

    constructor() {
        this.roomId = null;
        this.userId = null;
        this.userName = null;

        this.players = [];
        this.question = null;
    }

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

        return await this.joinRoom(result, userName);
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

        WebsocketService.instance.onPlayers = this.onPlayers;
        WebsocketService.instance.onQuestion = this.onQuestion;

        return true;
    }

    static onPlayers(message) {
        RoomService.instance.players.splice(0, RoomService.instance.players.length);

        for (const player of message) {
            let pla = new Player();
            pla = Object.assign(pla, player);
            RoomService.instance.players.push(pla);
        }
    }

    static onQuestion(message) {
        let question = new Question();
        question.id = message.idQuestion;
        question.text = message.question;

        for (const rep of message.answers) {
            let reponse = new Response();
            reponse.text = rep.answer;
            reponse.id = rep.index;

            question.reponses.push(reponse);
        }

        RoomService.instance.question = question;

        Vue.prototype.$bus.$emit("onQuestion", question);
    }

    setReady() {
        WebsocketService.instance.sendReady();
    }
}

export default RoomService;