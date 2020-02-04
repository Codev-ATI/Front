import WebsocketService from "./WebsocketService";
import GameService from "./GameService";
import Player from "../objects/Player";
import Question from "../objects/Question";
import Vue from "vue";
import Response from "../objects/Response";
import Quiz from "../objects/Quiz";
import Stats from "../objects/Stats";

class RoomService {

    static instance = null;

    constructor() {
        this.roomId = null;
        this.userId = null;
        this.userName = null;

        this.players = [];
        this.quiz = null;
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

        this.instance.quiz = new Quiz();
        this.instance.quiz.title = result.titre;
        this.instance.quiz.nbQuestions = result.nbQuestions;


        await WebsocketService.getInstance(this.instance.roomId, this.instance.userId);

        WebsocketService.instance.onPlayers = this.onPlayers;
        WebsocketService.instance.onQuestion = this.onQuestion;
        WebsocketService.instance.onStats = this.onStats;

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

        Vue.prototype.$bus.$emit("onQuestion", question);
    }

    static onStats(message) {
        let stats = new Stats();
        for (const pla of message) {
            let player = new Player();
            player = Object.assign(player, pla);
            stats.players.push(player);
        }

        Vue.prototype.$bus.$emit("onStats", stats);
    }

    setReady() {
        WebsocketService.instance.sendReady();
    }
}

export default RoomService;