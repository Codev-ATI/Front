<template>
    <div id="main_div" class="card-center div-round">
        <md-card id="card_question" class="card-title md-accent">
            <md-card-header class="md-title">
                {{ question.text }}
            </md-card-header>
        </md-card>

        <div class="md-layout">
            <CResponse v-for="response in question.reponses" :key="question.id + '_' + response.id" :response="response" class="md-layout-item" />
        </div>
    </div>
</template>


<script>
    import CResponse from "./Response"
    import Question from "../../../objects/Question";

    export default {
        name: "Question",
        components: {CResponse},
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
