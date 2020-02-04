<template>
    <div id="main_div" class="card-center div-round">
        <md-card id="card_question" class="card-title md-accent">
            <md-card-header class="md-title">
                {{ question.text }}
            </md-card-header>
        </md-card>

        <div class="md-layout">
            <Response v-for="response in question.reponses" :key="response.text" :response="response" class="md-layout-item" />
        </div>
    </div>
</template>


<script>
    import Response from "./Response"
    import Question from "../../../objects/Question";

    export default {
        name: "Question",
        components: {Response},
        props: {
            question: {
                type: Question,
                required: true
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../assets/theme";

    #main_div {
        padding-bottom: 1%;
    }

    #card_question {
        margin-top: 5%;
    }
</style>
