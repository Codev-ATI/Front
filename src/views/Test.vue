<template>
    <div>
        <md-button class="md-raised" @click="click">TEST</md-button>
    </div>
</template>

<script>
    import WebsocketService from "../WebsocketService"

    export default {
        name: "Test",
        methods: {
            click() {
                let ws = new WebsocketService("1", "ABC");
                ws.observeQuizz().subscribe(value => {
                    let questionnaire = value
                    console.log(questionnaire)
                })
            }
        }
    }
</script>

<style scoped>

</style>