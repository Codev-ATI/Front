<template>
    <div>
        <md-button class="md-raised" @click="click">TEST</md-button>
    </div>
</template>

<script>
    import WebsocketService from "../services/WebsocketService"

    export default {
        name: "Test",
        methods: {
            click() {
                // TODO ip WebService (= ip actuelle ?)
                var wss = new WebsocketService("demos.kaazingg.com/echo");

                wss.sendMessage("Bonjour");

            }
        }
    }
</script>

<style scoped>

</style>