<template>
    <div>
        <QuestionTitle />

        <div id="div_reponse">
            <md-card md-with-hover class="card_reponse md-primary">
                <md-card-content class="md-title">
                    Blanc
                </md-card-content>
            </md-card>

            <md-card md-with-hover class="card_reponse md-primary">
                <md-card-content class="md-title">
                    Bleu
                </md-card-content>
            </md-card>

            <md-card md-with-hover class="card_reponse md-primary">
                <md-card-content class="md-title">
                    Noir
                </md-card-content>
            </md-card>

            <md-card md-with-hover class="card_reponse md-primary">
                <md-card-content class="md-title">
                    Marron
                </md-card-content>
            </md-card>
        </div>
    </div>
</template>

<script>
    import QuestionTitle from "./QuestionTitle";
    export default {
        name: "QuestionSample",
        components: {QuestionTitle},
        data: () => ({
            question: null
        })
    }
</script>

<style scoped lang="scss">
    @import "../../assets/theme";
    @import "../../assets/global";

    #div_reponse {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
    }

    .card_reponse {
        @extend .card;
        width: 30%;
        text-align: center;
        font-size: 2em;
        padding: 4%;
    }
</style>
