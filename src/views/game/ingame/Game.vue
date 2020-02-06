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
                    <span>{{ time }} secondes</span>
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

                if (this.timer != null) window.clearInterval(this.timer);
                this.time = 30;
                this.timer = window.setInterval(this.timerTick, 1000);
            });

            this.$bus.$once("onStats", (stats) => {
                this.$router.push({ name: "stats", params: { stats: stats } })
            });

            this.$bus.$on("onAnswer", () => {
                if (this.timer != null) {
                    window.clearInterval(this.timer);
                    this.timer = null;
                    this.time = 0;
                }
            });

            this.$bus.$on("clickReponse", (reponse) => {
                RoomService.instance.sendResponse(this.question.id, reponse.id);
            });

            this.question = this.firstQuestion;

            this.timer = window.setInterval(this.timerTick, 1000);
        },
        props: {
            firstQuestion: {
                type: Question,
                required: true
            }
        },
        data: () => ({
            question: null,
            quiz: RoomService.instance.quiz,
            timer: null,
            time: 30
        }),
        methods: {
            timerTick() {
                if (this.time > 0) this.time--;
                else window.clearInterval(this.timer);
            }
        },
        beforeDestroy() {
            this.$bus.$off("onQuestion");
            this.$bus.$off("onStats");
            this.$bus.$off("clickReponse");
            this.$bus.$off("onAnswer");
        }
    }
</script>

<style scoped lang="scss">

    #icon_chrono {
        color: white;
    }

</style>