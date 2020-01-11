<template>
    <div>
        <md-card id="card_question" class="md-accent">
            <md-card-header>
                De quelle couleur était le cheval blanc d'Henry IV ?
            </md-card-header>
        </md-card>
    </div>
</template>

<script>
    export default {
        name: "QuestionTitle"
    }
</script>

<style scoped lang="scss">
    @import "../../assets/theme";
    @import "../../assets/global";

    #card_question {
        @extend .div-round;
        width: 90%;
        margin: 2% 5%;
        text-align: center;
        color: white;
        background-color: $accent;
        font-size: 2em;
        padding: 4%;
    }

</style>