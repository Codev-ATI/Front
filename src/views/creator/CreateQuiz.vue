<template>
    <div>
        <md-content id="content_createur" class="card md-accent md-elevation-8 md-display-1">
            <span>Créateur de quiz</span>
        </md-content>

        <md-content id="content_titre" class="card md-primary md-layout">
            <md-content id="content_text_titre" class="md-primary md-layout-item md-size-15 md-title">
                Titre
            </md-content>

            <input id="input_titre" type="text" class="input md-elevation-8 md-title md-layout-item md-size-70" v-model="quiz.title" />
        </md-content>

        <QuestionEditor class="question_editor div-round" v-for="ques in quiz.questions" :key="quiz.questions.indexOf(ques)" :question="ques" />

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
    import Quiz from "../../objects/Quiz";
    import Question from "../../objects/Question";
    import GameService from "../../services/GameService";
    import AuthService from "../../services/AuthService";

    export default {
        name: "CreateQuiz",
        components: {QuestionEditor},
        data: () => ({
            quiz: new Quiz()
        }),
        computed: {
            isValid() {
                return this.quiz.isValid();
            }
        },
        methods: {
            ajouterQuestion() {
                this.quiz.questions.push(new Question());
            },

            async terminer() {
                console.log(this.quiz.toJSON());
                console.log(JSON.stringify(this.quiz.toJSON()));

                this.quiz.owner = AuthService.getPseudo();

                let result = await GameService.createQuiz(JSON.stringify(this.quiz.toJSON()));

                if (result == null) {
                    // error
                } else {
                    this.$router.push("/playgame");
                }
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