<template>
    <div>
        <div id="main_div" class="div-round md-elevation-4">
            <md-content id="div_list" class="md-scrollbar div-round">
                <div id="list" v-if="quizs != null">
                    <Quiz v-for="quiz in quizs" :key="quiz.id" :quiz="quiz" />
                </div>

                <LoadingBar v-if="quizs == null" />
            </md-content>
        </div>

        <div id="div_pager">
            <md-button class="md-icon-button md-accent md-raised" @click="previous" :disabled="page == 0">
                <md-icon>chevron_left</md-icon>
            </md-button>

            <span>
                <md-button class="md-accent" @click="firstPage">
                    {{ page + 1 }}
                </md-button>
                <md-tooltip md-direction="bottom">Revenir à la première page</md-tooltip>
            </span>

            <md-button class="md-icon-button md-accent md-raised" @click="next">
                <md-icon>chevron_right</md-icon>
            </md-button>
        </div>
    </div>
</template>

<script>
    import GameService from "../../../services/GameService";
    import Quiz from "./Quiz";
    import LoadingBar from "../../../components/LoadingBar";

    export default {
        name: "CreateGame",
        components: {LoadingBar, Quiz},
        async mounted() {
            this.quizs = await GameService.getGames(this.page, 10);
            this.$bus.$once("chooseQuiz", (quiz) => this.choose(quiz));
        },
        beforeDestroy() {
            this.$bus.$off("chooseQuiz");
        },
        data: () => ({
            page: 0,
            quizs: null,
            loading: false
        }),
        methods: {
            choose(quiz) {
                if (quiz != null) {
                    this.$router.push({ name: "choosepseudo", params: { quiz: quiz } });
                }
            },

            previous() {
                if (this.page == 0) return;

                this.updatePage(this.page - 1);
            },

            next() {
                this.updatePage(this.page + 1);
            },

            firstPage() {
                if (this.page == 0) return;
                this.updatePage(0);
            },

            async updatePage(page) {
                if (this.loading) return;

                this.loading = true;

                let quizs = await GameService.getGames(page, 10);
                if (quizs.length > 0) {
                    this.quizs = quizs;
                    this.page = page;
                }

                this.loading = false;
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
        width: 50%;
        margin-left: 25%;
        text-align: center;

        margin-top: 1%;
    }

</style>