<template>
    <div>
        <md-card id="div_header" class="md-accent div-round card-center">
            <md-card-header class="md-layout">
                <md-content class="md-accent md-subheading md-layout-item md-size-20">
                    <span class="helper" />
                    <span v-if="question != null">Question : {{ question.id + 1 }}/{{ quiz.nbQuestions }}</span>
                </md-content>

                <md-content class="md-accent md-title md-layout-item md-size-60">
                    {{ quiz.title }}
                </md-content>

                <md-content class="md-layout-item md-accent md-size-5 md-subheading">
                    <span class="helper" />
                    <md-icon id="icon_chrono">timer</md-icon>
                </md-content>

                <md-content class="md-layout-item md-size-15 md-accent md-subheading">
                    <span class="helper" />
                    <span>5 secondes</span>
                </md-content>
            </md-card-header>
        </md-card>

        <CQuestion :question="question" v-if="question != null" />
    </div>
</template>

<script>
    import Question from "../../../objects/Question"
    import RoomService from "../../../services/RoomService";
    import CQuestion from "./Question";

    export default {
        name: "Game",
        components: {CQuestion},
        mounted() {
            this.$bus.$on("onQuestion", (question) => {
                this.question = question;
            });

            this.$bus.$once("onStats", (stats) => {
                return stats;
               // this.$router.push({ name: "stats", params: { stats: stats } })
            });

            this.question = this.firstQuestion;
        },
        props: {
            firstQuestion: {
                type: Question,
                required: true
            }
        },
        data: () => ({
            question: null,
            quiz: RoomService.instance.quiz
        }),
        beforeDestroy() {
            this.$bus.$off("onQuestion");
            this.$bus.$off("onStats");
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../assets/theme";

    #icon_chrono {
        color: white;
    }

</style>