<template>
    <div>
        <md-app>
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
                    <md-button class="md-raised" to="sample">
                        Exemple question
                    </md-button>

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
    import GameService from "../GameService";

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
            isConnected: GameService.hasToken()
        }),
        methods: {
            disconnect() {
                GameService.disconnect();

                if (this.$router.currentRoute != "/home") {
                    this.$router.push("/home");
                }
            }
        }
    }
</script>

<style scoped lang="scss">

    .md-app {
        border: 1px solid rgba(#000, .12);
    }

    #button_logo {
        text-align: center;
        vertical-align: middle;
        width: 25%;
        height: 40%;

        background-color: saddlebrown;
    }

    #button_rejoindre {
        background-color: fuchsia;

        margin-left: 5%;
        margin-right: 5%;
    }

    .md-title {
        color: blueviolet !important;
    }

</style>
