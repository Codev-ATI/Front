<template>
    <div id="div_loading">
        <md-progress-bar md-mode="indeterminate" class="md-accent"></md-progress-bar>
    </div>
</template>

<script>
    export default {
        name: "LoadingBar"
    }
</script>

<style scoped>
    #div_loading {
        width: 40%;
        margin-top: 2%;
        margin-left: 30%;
    }
</style>