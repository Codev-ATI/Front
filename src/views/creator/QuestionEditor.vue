<template>
    <div id="main_div" class="md-elevation-5">
        <div id="div_question" class="card md-layout md-elevation-2">
            <span id="span_question" class="md-body-2 md-layout-item">
                Question
            </span>

            <div id="div_input_question">
                <input id="input_question" type="text" class="input md-elevation-8 md-body-2 md-layout-item" v-model="question.text" />
            </div>
        </div>

        <div id="div_reponses" class="card md-elevation-2">
            <span id="span_reponse">
                Réponses :
            </span>

            <ResponseEditor :reponse="question.correctReponse" />

            <ResponseEditor v-for="rep in question.reponses" v-bind:key="question.reponses.indexOf(rep)" :reponse="rep" />

            <div id="div_add" v-if="question.reponses.length < 5">
                <md-button class="md-fab md-mini" @click="ajouterReponse">
                    <md-icon>add</md-icon>
                </md-button>
            </div>
        </div>
    </div>
</template>

<script>
    import ResponseEditor from "./ResponseEditor";
    import Question from "../../objects/Question"
    import Reponse from "../../objects/Response";

    export default {
        name: "QuestionEditor",
        components: {ResponseEditor},
        props: {
            question: {
                type: Question,
                required: true
            }
        },
        mounted () {
            this.$bus.$on("removeReponse", (rep) => {
                let index = this.question.reponses.indexOf(rep);

                if (index >= 0) this.question.reponses.splice(index, 1)
            });
        },
        methods: {
            ajouterReponse() {
                this.question.reponses.push(new Reponse(false));
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/theme";

    #main_div {
        background-color: $primary;

        padding-top: 1px;
        padding-bottom: 1px;
    }

    #div_question, #div_reponses {
        margin-top: 5px;
        margin-bottom: 5px;

        padding-top: 10px;
        padding-bottom: 10px;

        background-color: $secondary;
    }

    #span_question {
        text-align: center;
    }

    #span_reponse {
        margin-left: 10px;
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