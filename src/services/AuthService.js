import axios from "axios";
import {sha256} from "js-sha256";
import Vue from 'vue';

const SixNezService = {

    async register(login, password) {
        var hashedpassword = sha256(password);

        return await axios({
            method: "POST",
            url: "/app/register",
            params: {
                username: login,
                password: hashedpassword
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
                window.localStorage.setItem("token", response.data);
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

    async forceCheckToken() {
        var token = window.localStorage.getItem("token");
        if (token == null) return false;

        /*
        return await axios({
            method: "GET",
            url: "/film",
            headers: {
                'Authorization': "Bearer " + token,
            }
        }).catch(error => {
            if (error == undefined || error.message === "Network Error") {
                window.localStorage.removeItem("token")
                return false
            } else return true;
        });*/

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