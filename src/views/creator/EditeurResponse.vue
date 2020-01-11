<template>
    <div>
        <md-card id="main_div" class="card md-layout">
            <div class="md-layout-item">
                <input id="input_reponse" type="text" class="input md-elevation-8 md-title" v-model="reponse" />
            </div>

            <div class="md-layout-item md-size-5">
                <md-button id="button_clear" class="md-fab md-primary" @click="supprimer">
                    <md-icon>clear</md-icon>
                </md-button>
            </div>
        </md-card>
    </div>
</template>

<script>
    import Vue from "vue";

    export default {
        name: "EditeurResponse",
        props: {
            id: {
                type: Number,
                required: true
            }
        },
        data: () => ({
            reponse: null
        }),
        methods: {
            supprimer() {
                Vue.prototype.$bus.$emit("removeReponse", this.id);
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/theme";
    @import "../../assets/global";

    #main_div {
        background-color: $accent;
    }

    #input_reponse {

        text-align: center;
    }

    #button_clear {
    }

</style>