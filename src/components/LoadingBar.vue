<template>
    <div id="div_loading">
        <md-progress-spinner class="md-accent" :md-diameter="50" :md-stroke="6" md-mode="indeterminate"></md-progress-spinner>
    </div>
</template>

<script>
    export default {
        name: "LoadingBar"
    }
</script>

<style scoped lang="scss">

    #div_loading {
        text-align: center;
        margin: 2% auto auto;
    }
</style>