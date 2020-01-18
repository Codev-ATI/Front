<template>
    <div>
        <md-content id="content_createur" class="card md-accent md-elevation-8 md-display-1">
            <span>Créateur de quizz</span>
        </md-content>

        <md-content id="content_titre" class="card md-primary md-layout">
            <md-content id="content_text_titre" class="md-primary md-layout-item md-size-15 md-title">
                Titre
            </md-content>

            <input id="input_titre" type="text" class="input md-elevation-8 md-title md-layout-item md-size-70" v-model="quizz.titre" />
        </md-content>

        <QuestionEditor class="question_editor div-round" v-for="ques in quizz.questions" :key="quizz.questions.indexOf(ques)" :question="ques" />

        <div id="div_buttons" class="md-layout">
            <md-button class="md-raised md-accent md-layout-item" @click="terminer" :disabled="!isValid">
                <span>Valider et terminer</span>
            </md-button>

            <md-button class="md-raised md-accent md-layout-item" @click="ajouterQuestion">
                <md-icon>add</md-icon>
                <span>Ajouter une question</span>
            </md-button>
        </div>
    </div>
</template>

<script>
    import QuestionEditor from "./QuestionEditor";
    import Quizz from "../../objects/Quizz";
    import Question from "../../objects/Question";
    import GameService from "../../GameService";

    export default {
        name: "CreateQuiz",
        components: {QuestionEditor},
        data: () => ({
            quizz: new Quizz()
        }),
        computed: {
            isValid() {
                return this.quizz.isValid();
            }
        },
        methods: {
            ajouterQuestion() {
                this.quizz.questions.push(new Question());
            },

            terminer() {
                console.log(this.quizz.toJSON());
                console.log(JSON.stringify(this.quizz.toJSON()));

                GameService.createQuiz(JSON.stringify(this.quizz.toJSON()));
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/theme";

    #content_createur {
        width: 70%;
        margin: 2% 15%;
        text-align: center;
        padding: 1%;
    }

    #content_titre {
        width: 60%;
        margin-left: 20%;
        text-align: center;

        padding-top: 1%;
        padding-bottom: 1%;
    }

    #content_text_titre {
        background-color: transparent;
    }

    #div_input_titre {
        width: 80%;
        text-align: center;
        margin: auto;
    }

    #div_buttons {
        width: 50%;
        margin-left: 25%;
    }

    .question_editor {
        width: 70%;
        margin-left: 15%;
        margin-bottom: 1%;
    }


</style>