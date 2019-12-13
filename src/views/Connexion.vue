<template>
    <div>
        <div id="div_main">
            <md-card id="card_titre" class="md-accent">
                <md-card-header class="md-title">
                    Connexion
                </md-card-header>
            </md-card>

            <md-card id="card_pseudo" class="md-accent">
                <md-card-content>
                    <div class="md-layout div_input">
                        <md-icon class="icon">person</md-icon>

                        <span class="md-accent md-layout-item">
                            Pseudo
                        </span>

                        <input type="text" class="md-layout-item input md-elevation-8" v-model="pseudo" />
                    </div>
                </md-card-content>
            </md-card>

            <md-card id="card_motdepasse" class="md-accent">
                <md-card-content>
                    <div class="md-layout div_input">
                        <md-icon class="icon">vpn_key</md-icon>

                        <span class="md-accent md-layout-item">
                            Mot de passe
                        </span>

                        <input type="password" class="md-layout-item input md-elevation-8" v-model="password" />
                    </div>
                </md-card-content>
            </md-card>
        </div>

        <div id="div_button">
            <md-button id="button_connecter" class="md-accent md-raised" :disabled="!checkPage">
                Se connecter
            </md-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Connexion",
        data: () => ({
            pseudo: null,
            password: null
        }),
        computed: {
            checkPage() {
                if (this.pseudo == null || this.pseudo === "") return false
                if (this.password == null || this.password === "") return false
                return true
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/theme";

    #div_main {
        width: 60%;
        margin-left: 20%;

        background-color: $primary;
        border-radius: 20px;
    }

    #card_titre {
        margin-top: 5%;

        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
    }

    #card_pseudo {
        width: 80%;
        margin-top: 2%;

        border-bottom-right-radius: 20px;
        border-top-right-radius: 20px;
    }

    #card_motdepasse {
        width: 80%;
        margin-left: 20%;
        margin-top: 2%;
        margin-bottom: 2%;

        border-bottom-left-radius: 20px;
        border-top-left-radius: 20px;
    }

    .md-title {
        text-align: center;
    }

    .div_input {
        width: 70%;
        text-align: center;
        margin: 2% auto auto;
    }

    .icon {
        color: white !important;
    }

    .input {
        border-style: none;
        border-radius: 2px;
        text-align: center;
        color: $accent;
    }

    .input:focus {
        outline: none;
    }

    #div_button {
        text-align: center;
        margin-top: 5%;
    }


    #button_connecter {
        width: 20%;
        color: white;
        border-radius: 10px;
    }

</style>
