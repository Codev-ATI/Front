<template>
    <div>
        <div id="div_join" class="div-round">
            <md-card id="card_join" class="card-title md-accent">
                <md-card-header class="md-title" v-if="quiz != null">
                    Créer une partie
                </md-card-header>

                <md-card-header class="md-title" v-if="gameID != null">
                    Rejoindre une partie
                </md-card-header>
            </md-card>

            <md-card id="card_id" class="card-center md-accent">
                <md-card-content>
                    <div class="md-layout div_input md-size-10">
                        <md-icon class="icon">person_pin</md-icon>

                        <span class="md-accent md-layout-item md-size-30">
                            Choisissez un pseudo
                        </span>

                        <input type="text" class="md-layout-item input md-elevation-8 md-size-60" maxlength="10" v-model="pseudo" />
                    </div>
                </md-card-content>
            </md-card>

            <div class="div_button">
                <md-button class="button-round md-accent md-raised" :disabled="!checkPage" @click="rejoindre" v-if="gameID != null">
                    Rejoindre !
                </md-button>

                <md-button class="button-round md-accent md-raised" :disabled="!checkPage" @click="creer" v-if="quiz != null">
                    Créer !
                </md-button>
            </div>
        </div>

        <md-snackbar md-position="center" :md-duration="Infinity" :md-active.sync="showSnackbar">
            <span>Aucune partie avec l'ID '{{ this.gameID }}'</span>
            <md-button class="md-primary" @click="$router.push('/playgame')">Retour</md-button>
        </md-snackbar>
    </div>
</template>

<script>
    import Quiz from "../../../objects/Quiz";
    import RoomService from "../../../services/RoomService";

    export default {
        name: "ChoosePseudo",
        mounted() {
          // TODO si le joueur est connecté, on redirige direct

            if (this.gameID == null && this.quiz == null) {
                this.$router.push('/playgame');
            }
        },
        props: {
            gameID: {
                type: String,
                required: false
            },
            quiz: {
                type: Quiz,
                required: false
            }
        },
        computed: {
            checkPage() {
                if (this.pseudo == null) return false;
                if (this.pseudo.length < 1) return false;

                return true;
            }
        },
        data: () => ({
            pseudo: null,
            showLoading: true,
            showSnackbar: false
        }),
        methods: {
            async rejoindre() {
                this.showLoading = true;

                let result = await RoomService.joinRoom(this.gameID, this.pseudo);

                if (result == null) {
                    this.showSnackbar = true;
                } else {
                    this.$router.push("/waitingroom");
                }

                //this.showLoading = false;
            },

            async creer() {
                this.showLoading = true;

                await RoomService.createRoom(this.quiz, this.pseudo);

                this.$router.push("/waitingroom");

                this.showLoading = false;
            },

            closed() {
                console.log("closed");
            }
        },
        destroyed() {
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../assets/theme";

    #div_join, #div_create {
        width: 60%;
        margin-left: 20%;
        padding-bottom: 1%;
        margin-bottom: 3%;
        margin-top: 5%;
    }

    #card_join {
        margin-top: 5%;
        text-align: center;
    }

    .div_input {
        text-align: center;
        margin: 2% auto auto;
    }

    .div_button {
        text-align: center;
        margin-top: 1%;
        margin-bottom: 1%;
    }

</style>