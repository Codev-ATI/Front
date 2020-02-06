import axios from "axios";
import {sha256} from "js-sha256";
import Vue from 'vue';

const SixNezService = {

    async register(login, password, pseudo) {
        var hashedpassword = sha256(password);

        return await axios({
            method: "POST",
            url: "/app/register",
            params: {
                username: login,
                password: hashedpassword,
                pseudo: pseudo
            }
        }).then(async response => {
            // OK
            if (response.status == 200) {
                return await this.connect(login, password);
            }
        },error => {
            console.log("Error code : " + error.response.status + " Error message : " + error.response.data.details);
            return error.response.status;
        });
    },

    async connect(login, password) {
        var hashedpassword = sha256(password);

        return await axios({
            method: "GET",
            url: "/app/login",
            params: {
                username: login,
                password: hashedpassword
            }
        }).then(response => {
            // OK
            if (response.status == 200) {
                window.localStorage.setItem("token", response.data.token);
                Vue.prototype.$bus.$emit("connected");

                return true;
            }
        }, error => {
            console.log("Error code : " + error.response.status + " Error message : " + error.response.data.details);
            return error.response.status;
        });
    },

    hasToken() {
        var token = window.localStorage.getItem("token");
        if (token == null) return false;

        return true;
    },

    getPseudo() {
        var token = window.localStorage.getItem("token");
        if (token == null) return null;

        return JSON.parse(atob(token.split(".")[1])).sub;
    },

    async forceCheckToken() {
        var token = window.localStorage.getItem("token");
        if (token == null) return false;

        let timeSeconds = JSON.parse(atob(token.split(".")[1])).exp;

        if (timeSeconds * 1000 > new Date().getTime()) return true;

        this.disconnect();
        return false;
    },

    disconnect() {
        if (window.localStorage.getItem("token") != null) {
            window.localStorage.removeItem("token");
            Vue.prototype.$bus.$emit("disconnected");
        }
    }

};

export default SixNezService;