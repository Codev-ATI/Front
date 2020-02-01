<template>
    <div>
        <md-card id="div_header" class="md-accent div-round card-center">
            <md-card-header class="md-layout">
                <md-content class="md-accent md-subheading md-layout-item md-size-20">
                    <span class="helper" />
                    <span>Question : 1/5</span>
                </md-content>

                <md-content class="md-accent md-title md-layout-item md-size-60">
                    Titre du quiz
                </md-content>

                <md-content class="md-layout-item md-accent md-size-5 md-subheading">
                    <span class="helper" />
                    <md-icon id="icon_chrono">timer</md-icon>
                </md-content>

                <md-content class="md-layout-item md-size-15 md-accent md-subheading">
                    <span class="helper" />
                    <span>5 secondes</span>
                </md-content>
            </md-card-header>
        </md-card>

        <Question />
    </div>
</template>

<script>
    import Question from "./Question";
    export default {
        name: "Game",
        components: {Question}
    }
</script>

<style scoped lang="scss">
    @import "../../../assets/theme";

    #icon_chrono {
        color: white;
    }

</style>