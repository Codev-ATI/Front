<template>
    <div>
        <md-app class="md-elevation-5">
            <md-app-toolbar class="md-primary md-layout">
                <div class="md-toolbar-section-start md-layout-item md-size-33">
                    <md-button id="button_logo" to="home">
                      <img id="img_logo" src="../assets/qati_logo.png" />
                    </md-button>

                    <md-content v-if="isConnected" class="md-primary md-title">
                        {{ getPseudo() }}
                    </md-content>
                </div>

                <div class="md-layout-item md-size-33">
                    <md-button id="button_rejoindre" class="md-raised" to="playgame">
                        Jouer !
                    </md-button>
                </div>

                <div class="md-toolbar-section-end md-layout-item" v-if="!isConnected">
                    <md-button class="md-raised md-accent" to="register">
                        Inscription
                    </md-button>

                    <md-button class="md-raised md-accent" to="login">
                        Connexion
                    </md-button>
                </div>

                <div class="md-toolbar-section-end md-layout-item" v-if="isConnected">
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

            AuthService.forceCheckToken();
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
            },

            getPseudo() {
                return AuthService.getPseudo();
            }
        },
        beforeDestroy() {
            this.$bus.$off("connected");
            this.$bus.$off("disconnected");
        }
    }
</script>

<style scoped lang="scss">

    #button_logo {
        width: 20%;
        height: 40%;
    }

    #button_rejoindre {
        background-color: white;
        width: 80%;
    }

</style>
