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
                <md-button id="button_quitter" class="button-round md-accent md-raised" @click="quitter">
                    Quitter
                </md-button>
            </div>
        </div>
    </div>
</template>

<script>
    import Player from "../menu/Player";
    import RoomService from "../../../services/RoomService";

    export default {
        name: "WaitingRoom",
        components: {Player},
        data: () => ({
            players: [ { id: 111, pseudo: "Banana !", ready: false }, { id: 112, pseudo: "Pizza ?", ready: true } ]
        }),
        computed: {
            getRoomID() {
                if (RoomService.instance == null || RoomService.instance.roomId == null) return null;
                return RoomService.instance.roomId;
            }
        },
        methods: {
            onMessage(msg) {
                console.log(msg);
            },
            quitter() {

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

    #button_quitter {
        margin-top: 5%;
        width: 16%;
        margin-left: 42%;
    }

</style>