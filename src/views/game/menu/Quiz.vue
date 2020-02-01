<template>
    <div id="div_quiz" @click="click">
        <md-card id="card_quiz" md-with-hover class="div-round card-center md-accent">
            <md-card-header>
                <md-content id="content_name" class="md-title md-accent">
                    {{ quiz.title }}
                </md-content>
            </md-card-header>

            <md-card-content>
                <md-content id="content_owner" class="md-caption md-accent">
                    Créé par : {{ quiz.owner }}
                </md-content>
            </md-card-content>
        </md-card>
    </div>
</template>

<script>
    import Quiz from "../../../objects/Quiz";

    export default {
        name: "Quiz",
        props: {
            quiz: {
                type: Quiz,
                required: true
            }
        },
        methods: {
            click() {
                this.$bus.$emit("chooseQuiz", this.quiz);
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../assets/theme";

    #div_quiz {
        text-align: center;
        margin: auto;
        width: 90%;
    }

    #card_quiz {
        width: 100%;
        text-align: center;
    }

    #content_name {
        text-align: center;
        margin: auto;
    }

    #content_owner {
        text-align: right;
        margin: auto;
    }

</style>