<template>
    <div>
        <div id="div_main" class="div-round">
            <md-card id="card_titre" class="card-title md-accent">
                <md-card-header class="md-title">
                    Connexion
                </md-card-header>
            </md-card>

            <md-card id="card_pseudo" class="card-left md-accent">
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

            <md-card id="card_motdepasse" class="card-right md-accent">
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
            <md-button id="button_connecter" class="button-round md-accent md-raised" :disabled="!checkPage">
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
    @import "../assets/global";

    #div_main {
        width: 60%;
        margin-left: 20%;
        padding-bottom: 1%;
    }

    #card_titre {
        margin-top: 5%;
    }

    .md-title {
        text-align: center;
    }

    .div_input {
        width: 70%;
        text-align: center;
        margin: 2% auto auto;
    }

    #div_button {
        text-align: center;
        margin-top: 5%;
    }

</style>
