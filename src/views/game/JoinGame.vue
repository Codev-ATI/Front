<template>
    <div>
        <div id="div_join" class="div-round">
            <md-card id="card_join" class="card-title md-accent">
                <md-card-header class="md-title">
                    Rejoindre une partie
                </md-card-header>
            </md-card>

            <md-card id="card_id" class="card-center md-accent">
                <md-card-content>
                    <div class="md-layout div_input">
                        <md-icon class="icon">extension</md-icon>

                        <span class="md-accent md-layout-item">
                            ID de partie*
                        </span>

                        <input type="text" class="md-layout-item input md-elevation-8" maxlength="4" v-model="id" />
                    </div>
                </md-card-content>
            </md-card>

            <md-content id="card_ps" class="md-primary">
                *L'ID de la partie est un code en 4 chiffres et lettres
            </md-content>

            <div class="div_button">
                <md-button class="button-round md-accent md-raised" :disabled="!checkPage">
                    Rejoindre
                </md-button>
            </div>
        </div>


        <div id="div_create" class="div-round">
            <md-card id="card_create" class="card-title md-accent">
                <md-card-header class="md-title">
                    Créer une partie
                </md-card-header>
            </md-card>

            <md-content id="card_create_text" class="md-primary">
                Créez votre propre partie en choisissant parmis de nombreux quizz !
            </md-content>

            <div class="div_button">
                <md-button class="button-round md-accent md-raised" to="creategame">
                    Créer
                </md-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "JoinGame",
        data: () => ({
            id: null
        }),
        computed: {
            checkPage() {
                if (this.id == null || this.id === "") return false

                return this.id.match(/[a-zA-Z0-9]{4}/);
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/theme";
    @import "../../assets/global";

    #div_join, #div_create {
        width: 60%;
        margin-left: 20%;
        padding-bottom: 1%;
        margin-bottom: 3%;
    }

    #card_join {
        margin-top: 5%;
    }

    #card_ps {
        text-align: right;
        margin-right: 10px;
    }

    #card_create_text, .md-title {
        text-align: center;
    }

    .div_input {
        width: 70%;
        text-align: center;
        margin: 2% auto auto;
    }

    .div_button {
        text-align: center;
        margin-top: 1%;
        margin-bottom: 1%;
    }

</style>