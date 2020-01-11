<template>
    <div>
        <md-card id="card_editeur" class="md-accent">
            <md-card-header>
                Editeur de quizz
            </md-card-header>
        </md-card>

        <md-card id="card_question" class="card">
            <md-card-content>
                <md-content id="content_question" class="md-title">
                    Question :
                </md-content>

                <div id="div_input_question">
                    <input id="input_question" type="text" class="input md-elevation-8 md-title" v-model="question" />
                </div>
            </md-card-content>
        </md-card>

        <EditeurResponse v-for="reponse in reponses" v-bind:key="reponse" :id="reponse">

        </EditeurResponse>

        <div id="div_add">
            <md-button class="md-fab" @click="ajouterReponse">
                <md-icon>add</md-icon>
            </md-button>
        </div>
    </div>
</template>

<script>
    import EditeurResponse from "./EditeurResponse";

    export default {
        name: "Editeur",
        components: {EditeurResponse},
        mounted () {
            this.$bus.$on("removeReponse", (id) => {
                this.reponses.splice(this.reponses.indexOf(id), 1)
            });
        },
        data: () => ({
            question: null,
            reponses: [],
            index: 0
        }),
        methods: {
            ajouterReponse() {
                this.reponses.push(this.index);
                this.index++;
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/theme";
    @import "../../assets/global";

    #card_editeur {
        @extend .card;
        width: 90%;
        margin: 2% 5%;
        text-align: center;
        color: white;
        background-color: $accent;
        font-size: 2em;
        padding: 1%;
    }

    #card_question, #content_question, #div_input_question {
        display: inline-block;
    }

    #card_question {
        background-color: $primary;
    }

    #content_question {
        width: 20%;

        background-color: transparent;
        text-align: center;
        margin: auto;
    }

    #div_input_question {
        width: 80%;
        text-align: left;
        margin: auto;
    }

    #input_question {
        width: 95%;
        text-align: center;
    }

    #div_add {
        text-align: center;
    }

</style>