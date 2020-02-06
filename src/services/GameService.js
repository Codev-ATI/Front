import axios from "axios";
import Quiz from "../objects/Quiz";

const SixNezService = {

    async getGames(pageNumber, count) {
        return await axios({
            method: "GET",
            url: "/app/game",
            params: {
                'page': pageNumber,
                'size': count
            }
        }).then(response => {
            //console.log(response);
            var quizs = [];
            for (const o of response.data) {
                let q = new Quiz();
                q = Object.assign(q, o);
                quizs.push(q);
            }

            return quizs;
        }, error => {
            console.log(error);
            return null;
        });
    },

    async createQuiz(quiz) {
        return await axios({
            method: "POST",
            url: "/auth/createQuiz",
            headers: {
                'Authorization': "Bearer " + window.localStorage.getItem("token"),
                'Content-Type': 'application/json'
            },
            data: quiz
        }).then(response => {
            //console.log(response);
            return response.data;
        }, error => {
            console.log(error);
            return null;
        });
    },

    async createGame(quiz) {
        return await axios({
            method: "GET",
            url: "/app/createGame/" + quiz.id
        }).then(response => {
            //console.log(response);
            return response.data;
        }, error => {
            console.log(error);
            return null;
        });
    },

    async joinGame(id, pseudo) {
        return await axios({
            method: "GET",
            url: "/app/joinGame/" + id + "/" + pseudo
        }).then(response => {
            //console.log(response);
            // id et pseudo
            return response.data;
        }, error => {
            console.log(error);
            return null;
        });
    }

};

export default SixNezService;