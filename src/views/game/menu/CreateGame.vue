<template>
    <div>
        <div id="main_div" class="div-round md-elevation-4">
            <md-content id="div_list" class="md-scrollbar div-round">
                <div id="list">
                    <Quiz v-for="quiz in quizs" :key="quiz.id" :quiz="quiz" />
                </div>
            </md-content>
        </div>

        <div id="div_pager" class="pager">
            <md-button id="button_left" class="pager md-icon-button md-raised md-accent">
                <md-icon>chevron_left</md-icon>
            </md-button>

            <div class="pager">
                <span class="helper" />
                <md-content>{{ page + 1 }}</md-content>
            </div>

            <md-button id="button_right" class="pager md-icon-button md-raised md-accent">
                <md-icon>chevron_right</md-icon>
            </md-button>
        </div>
    </div>
</template>

<script>
    import GameService from "../../../services/GameService";
    import Quiz from "./Quiz";

    export default {
        name: "CreateGame",
        components: {Quiz},
        async mounted() {
            this.quizs = await GameService.getGames(this.page, 10);
            this.$bus.$once("chooseQuiz", (quiz) => this.choose(quiz));
        },
        data: () => ({
            page: 0,
            quizs: []
        }),
        methods: {
            choose(quiz) {
                if (quiz != null) {
                    this.$router.push({ name: "choosepseudo", params: { quiz: quiz } });
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../assets/theme";

    #main_div {
        width: 80%;
        margin-left: 10%;
        margin-top: 1%;

        padding-top: 1%;
        padding-bottom: 1%;

        background-color: $accent;
    }

    #div_list {
        padding-left: 2px;
        padding-right: 2px;

        width: 96%;
        margin-left: 2%;

        height: 70vh;

        text-align: center;
        overflow: auto;

        background-color: $primary;
    }

    #div_list::-webkit-scrollbar-thumb {
        background-color: $accent;
    }

    #div_list::-webkit-scrollbar-track {
        background-color: transparent;
    }

    #list {
        margin-top: 1%;
        margin-left: auto;
        margin-right: auto;

        text-align: center;
        width: 80%;
    }

    .md-content {
        overflow: auto;
    }

    #div_pager {
        text-align: center;
        margin-top: 1%;
        width: 50%;
        margin-left: 25%;
    }

    .pager {
        display: inline-block;
        margin-left: 5%;
        margin-right: 5%;
    }

</style>