<template>
    <div>
        <md-button class="md-raised" @click="click">Create and join</md-button>
        <md-button class="md-raised" @click="click2">READY</md-button>
        <md-button class="md-raised" @click="click3">Q1</md-button>
        <md-button class="md-raised" @click="click4">Q2</md-button>
    </div>
</template>

<script>
    import WebsocketService from "../WebsocketService"

    export default {
        name: "Test",
        data: () => ({
                            ws: null,
                        }),

        methods: {
            click() {
                this.ws = new WebsocketService("1LOO", "ABC");
                this.ws.observeQuizz().subscribe(value => {
                    let questionnaire = value
                    console.log(questionnaire)
                })
            },

            click2() {
                 this.ws.ready()
             },
             click3() {
                 this.ws.question1()
            },
            click4() {
                this.ws.question2()
            }
        },

    }
</script>

<style scoped>

</style>