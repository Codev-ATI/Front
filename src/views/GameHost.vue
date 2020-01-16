<template>
    <div>
        <div id="main_div" class="div-round md-elevation-4">
            <md-content id="div_list" class="md-primary">

            </md-content>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GameHost",
        props: {
            gameID: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/theme";
    @import "../assets/global";

    #main_div {
        width: 80%;
        margin-left: 10%;
        margin-top: 1%;
    }
</style>