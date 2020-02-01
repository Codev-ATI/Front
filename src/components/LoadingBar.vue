<template>
    <div id="div_loading">
        <md-progress-bar class="md-primary" md-mode="indeterminate"></md-progress-bar>
    </div>
</template>

<script>
    export default {
        name: "LoadingBar"
    }
</script>

<style scoped lang="scss">
    @import "../assets/theme";

    #div_loading {
        width: 40%;
        margin-top: 2%;
        margin-left: 30%;
    }
</style>