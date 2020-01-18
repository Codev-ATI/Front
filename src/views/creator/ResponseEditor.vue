<template>
    <div>
        <div id="main_div" class="card md-layout" :style="{background: getColor}">
            <div id="div_input" class="md-layout-item md-size-80">
                <span class="helper" />

                <input id="input_reponse" type="text" class="input md-elevation-8 md-title" v-model="reponse" />
            </div>

            <div id="div_button" class="md-layout-item" :style="{visibility: isCorrect ? 'hidden' : 'show'}">
                <md-button class="md-fab md-primary" @click="supprimer">
                    <md-icon>clear</md-icon>
                </md-button>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from "vue";

    export default {
        name: "EditeurResponse",
        props: {
            index: {
                required: true
            },
            correct: {
                type: Boolean,
                required: true
            }
        },
        data: () => ({
            reponse: null
        }),
        computed: {
            getColor() {
                if (this.correct) {
                    return "green";
                } else {
                    return "red";
                }
            },
            isCorrect() {
                return this.correct;
            },
            isValid() {
                if (this.reponse == null) return false;
                if (this.reponse === "") return false;
                if (this.reponse.trim() === "") return false;
                return true;
            }
        },
        methods: {
            supprimer() {
                Vue.prototype.$bus.$emit("removeReponse", this.index);
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/theme";
    @import "../../assets/global";

    #main_div {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    #div_input {
        margin-left: 5%;
    }

    #input_reponse {
        width: 100%;
        text-align: center;
    }

    #div_button {
        text-align: right;
    }

</style>