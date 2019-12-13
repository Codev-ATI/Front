<template>
    <div>
        <div class="div-question">
            De quelle couleur était le cheval blanc d'Henry IV ?
        </div>

        <div class="div-reponse">
            <div class="card-reponse">
                Blanc
            </div>

            <div class="card-reponse">
                Bleu
            </div>

            <div class="card-reponse">
                Noir
            </div>

            <div class="card-reponse">
                Marron
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "QuestionSample",
        data: () => ({
            question: null
        })
    }
</script>

<style scoped lang="scss">
    @import "../assets/theme";
    @import "../assets/global";
</style>
