<template>
    <div>
        <div id="div_stats" class="div-round md-elevation-4">
            <md-card id="card_titre" class="card-title md-accent">
                <md-card-header class="md-title">
                    Résultats
                </md-card-header>
            </md-card>

            <md-card id="card_id" class="card-center md-accent">
                <md-card-header>
                    <div class="md-layout">
                        <md-icon class="icon md-layout-item md-size-15">extension</md-icon>

                        <span class="md-accent md-layout-item md-size-70">
                            ID de partie : {{ getRoomID() }}
                        </span>

                        <span class="md-layout-item md-size-15" />
                    </div>
                </md-card-header>
            </md-card>

            <md-card id="card_joueur" class="card-center md-accent">
                <md-card-header>
                    <div class="md-layout">
                        <md-icon class="icon md-layout-item md-size-15">grade</md-icon>

                        <span class="md-accent md-layout-item md-size-70">
                            Scores :
                        </span>

                        <span class="md-layout-item md-size-15" />
                    </div>
                </md-card-header>
            </md-card>

            <div class="div_joueurs">
                <PlayerStat v-for="(player, index) in stats.players" :key="player.id" :player="player" :index="index" />
            </div>

            <div class="div_button">
                <md-button class="button button-round md-accent md-raised" @click="quitter">
                    Quitter
                </md-button>
            </div>
        </div>
    </div>
</template>

<script>
    import PlayerStat from "./PlayerStat";
    import Stats from "../../../objects/Stats";
    import RoomService from "../../../services/RoomService";
    export default {
        name: "Stats",
        components: {PlayerStat},
        mounted() {
            RoomService.disconnect();
        },
        props: {
            stats: {
                type: Stats,
                required: true
            }
        },
        methods: {
            quitter() {
                this.$router.push("/home");
            },

            getRoomID() {
                return RoomService.instance.roomId;
            }
        }
    }
</script>

<style scoped lang="scss">

    #div_stats, #div_create {
        width: 60%;
        margin-left: 20%;
        padding-bottom: 1%;
        margin-bottom: 3%;
    }

    #card_titre {
        margin-top: 5%;
    }

    #card_id {
        width: 50%;
        margin-bottom: 3%;
    }

    .md-title {
        text-align: center;
    }

    .button {
        width: 16%;
        margin-left: 42%;
    }
</style>