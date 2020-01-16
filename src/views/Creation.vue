<template>
    <div>
        <div id="main_div" class="div-round md-elevation-4">
            <md-content id="div_list" class="md-primary md-scrollbar">
                <div id="list">
                    <md-card v-for="quizz in quizzs" :key="quizz" md-with-hover>
                        <md-card-header>
                            {{ quizz }}
                        </md-card-header>
                    </md-card>
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
    export default {
        name: "Creation",
        data: () => ({
            quizzs: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"],
            page: 0
        })
    }
</script>

<style scoped lang="scss">
    @import "../assets/theme";
    @import "../assets/global";

    #main_div {
        width: 80%;
        margin-left: 10%;
        margin-top: 1%;
        padding-top: 5px;

        padding-bottom: 1%;
    }

    #div_list {
        width: 96%;
        margin-left: 2%;

        height: 70vh;

        text-align: center;
        overflow: auto;
    }

    #div_list::-webkit-scrollbar-thumb {
        background-color: $accent;
    }

    #div_list::-webkit-scrollbar-track {
        background-color: $primary;
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