<template>
    <div>
        <md-app class="md-elevation-5">
            <md-app-toolbar id="toolbar" class="md-primary md-layout">
                <div class="md-layout-item md-size-33">
                    <md-button id="button_logo" class="md-raised" to="home">
                      <img id="img_logo" src="../assets/qati_logo.png" />
                    </md-button>
                </div>

                <md-button id="button_rejoindre" class="md-raised md-layout-item" to="playgame">
                    Jouer !
                </md-button>

                <div class="md-toolbar-section-end md-layout-item md-size-33" v-if="!isConnected">
                    <md-button class="md-raised md-accent" to="register">
                        Inscription
                    </md-button>

                    <md-button class="md-raised md-accent" to="login">
                        Connexion
                    </md-button>
                </div>

                <div class="md-toolbar-section-end md-layout-item md-size-33" v-if="isConnected">
                    <md-button class="md-raised md-accent" to="createquiz">
                        Créer un quizz
                    </md-button>

                    <md-button class="md-raised md-accent" to="" @click="disconnect">
                        Déconnexion
                    </md-button>
                </div>
            </md-app-toolbar>
        </md-app>
    </div>
</template>

<script>
    import AuthService from "../services/AuthService";

    export default {
        name: "NavBar",
        mounted () {
            this.$bus.$on("connected", () => {
                this.isConnected = true;
            });

            this.$bus.$on("disconnected", () => {
                this.isConnected = false;
            });
        },
        data: () => ({
            isConnected: AuthService.hasToken()
        }),
        methods: {
            disconnect() {
                AuthService.disconnect();

                if (this.$router.currentRoute != "/home") {
                    this.$router.push("/home");
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/theme";

    #button_logo {
        text-align: center;
        vertical-align: middle;
        width: 25%;
        height: 40%;

        background-color: $accent;
    }

    #button_rejoindre {
        background-color: white;

        margin-left: 5%;
        margin-right: 5%;
    }

</style>
