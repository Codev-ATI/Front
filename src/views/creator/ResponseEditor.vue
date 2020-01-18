<template>
    <div>
        <div id="main_div" class="card md-layout" :class="getClass">
            <div id="div_input" class="md-layout-item">
                <span class="helper" />

                <input id="input_reponse" type="text" class="input md-elevation-8 md-body-1" v-model="reponse.text" />
            </div>

            <div id="div_button" class="md-layout-item md-size-10" :style="{visibility: isCorrect ? 'hidden' : 'show'}">
                <md-button class="md-fab button_clear" @click="supprimer">
                    <md-icon id="icon_clear">remove</md-icon>
                </md-button>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from "vue";
    import Reponse from "../../objects/Reponse";

    export default {
        name: "ResponseEditor",
        props: {
           reponse: {
               required: true,
               type: Reponse
           }
        },
        computed: {
            getClass() {
                if (this.reponse.correct) {
                    return "div_correct";
                } else {
                    return "div_incorrect";
                }
            },
            isCorrect() {
                return this.reponse.correct;
            }
        },
        methods: {
            supprimer() {
                Vue.prototype.$bus.$emit("removeReponse", this.reponse);
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../assets/theme";

    .div_correct, .div_incorrect {
        border-width: 1px;
        border-style: solid;
    }

    .div_correct {
        border-color: green;
    }

    .div_incorrect {
        border-color: red;
    }

    #main_div {
        margin-top: 2px;
        margin-bottom: 0;
    }

    #div_input {
        padding-top: 2px;
        padding-bottom: 2px;
    }

    #input_reponse {
        width: 75%;
        text-align: center;
        margin-left: 18%;
    }

    #div_button {
        text-align: right;
    }

    .button_clear {
        height: 20px !important;
        width: 20px !important;

        background-color: white !important;
    }

    #icon_clear {
        color: $accent;
    }

</style>