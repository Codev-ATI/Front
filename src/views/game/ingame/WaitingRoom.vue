<template>
    <div>
        <div id="div_salle" class="div-round">
            <md-card id="card_salle" class="card-title md-accent">
                <md-card-header class="md-title">
                    Salle d'attente
                </md-card-header>
            </md-card>

            <md-card id="card_id" class="card-center md-accent">
                <md-card-header>
                    <div class="md-layout">
                        <md-icon class="icon md-layout-item md-size-15">extension</md-icon>

                        <span class="md-accent md-layout-item md-size-70">
                            ID de partie : {{ getRoomID }}
                        </span>

                        <span class="md-layout-item md-size-15" />
                    </div>
                </md-card-header>
            </md-card>

            <md-card id="card_joueur" class="card-center md-accent">
                <md-card-header>
                    <div class="md-layout">
                        <md-icon class="icon">supervisor_account</md-icon>

                        <span class="md-accent md-layout-item">
                            Joueurs :
                        </span>
                    </div>
                </md-card-header>
            </md-card>

            <div class="div_joueurs">
                <Player v-for="player in players" :key="player.id" :player="player" />
            </div>

            <div class="div_button">
                <md-button class="button button-round md-accent md-raised" @click="pret" :disabled="ready">
                    Prêt !
                </md-button>

                <md-button class="button button-round md-accent md-raised" @click="quitter">
                    Quitter
                </md-button>
            </div>
        </div>

        <md-card id="div_starting" class="div-round md-accent" v-if="allReady">
            <md-card-header>
                Début dans {{ time }} seconde{{ time > 1 ? 's':''}}
            </md-card-header>
        </md-card>
    </div>
</template>

<script>
    import Player from "../menu/Player";
    import RoomService from "../../../services/RoomService";

    export default {
        name: "WaitingRoom",
        components: {Player},
        mounted() {
            this.$bus.$once("onQuestion", (question) => {
                this.$router.push({ name: "game", params: { firstQuestion: question } });
            });

            this.$bus.$on("onPlayers", (players) => {
                let areAllReady = true;
                for (const pla of players) {
                    if (!pla.ready) {
                        areAllReady = false;
                        break;
                    }
                }

                this.allReady = areAllReady;

                if (areAllReady) {
                    this.timer = window.setInterval(() => { this.time-- }, 1000);
                }
            });
        },
        beforeDestroy() {
            this.$bus.$off("onQuestion");
            this.$bus.$off("onPlayers");
            window.clearInterval(this.timer);
        },
        data: () => ({
            players: RoomService.instance.players,
            ready: false,
            allReady: false,
            time: 3,
            timer: null
        }),
        computed: {
            getRoomID() {
                if (RoomService.instance == null || RoomService.instance.roomId == null) return null;
                return RoomService.instance.roomId;
            }
        },
        methods: {
            quitter() {
                RoomService.instance.leaveRoom();
                this.$router.push("/home");
            },

            pret() {
                this.ready = true;
                RoomService.instance.setReady();
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../assets/theme";

    #div_salle, #div_create {
        width: 60%;
        margin-left: 20%;
        padding-bottom: 1%;
        margin-bottom: 3%;
    }

    #card_salle {
        margin-top: 5%;
    }

    #card_id {
        width: 50%;
        margin-bottom: 3%;
    }

    #card_create_text, .md-title {
        text-align: center;
    }

    .button {
        width: 16%;
        margin-left: 42%;
    }

    #div_starting {
        margin-left: 40%;
        width: 20%;

        text-align: center;
    }

</style>