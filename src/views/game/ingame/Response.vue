<template>
    <md-card id="main_card" md-with-hover class="card_reponse md-accent">
        <md-card-content class="md-title">
            {{ response.text }}
        </md-card-content>
    </md-card>
</template>

<script>
    import "../../../objects/Response"

    export default {
        name: "Response",
        props: {
            response: {
                type: Response,
                required: true
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../assets/theme";

    #main_card {
        width: 40%;
    }

    .card_reponse {
        @extend .card;
        text-align: center;
        font-size: 2em;
        padding: 4%;
    }

</style>