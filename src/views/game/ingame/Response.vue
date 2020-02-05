<template>
    <md-card id="main_card" md-with-hover class="card_reponse md-accent" :class="getStyle" @click.native="click">
        <md-card-content class="md-title">
            {{ response.text }}
        </md-card-content>
    </md-card>
</template>

<script>
    import "../../../objects/Response"

    export default {
        name: "Response",
        props: {
            response: {
                type: Response,
                required: true
            }
        },
        mounted() {
            this.$bus.$once("clickReponse", this.onClickResponse);

            this.$bus.$once("onAnswer", (id) => {
                if (this.response.id == id) this.response.correct = true;
                else this.response.correct = false;
            });
        },
        data: () => ({
            clicked: false,
            another: false
        }),
        computed: {
            getStyle() {
                if (this.response.correct == null) {
                    if (this.clicked == true) return 'clicked';
                    else return '';
                } else if (this.response.correct == true) {
                    return 'right';
                } else {
                    if (this.clicked == true) return 'wrong';
                    else return '';
                }
            }
        },
        methods: {
            click() {
                if (this.another == true) return;

                this.$bus.$emit("clickReponse", this.response);
                this.clicked = true;
            },
            onClickResponse() {
                this.another = true;
            }
        },
        beforeDestroy() {
            this.$bus.$off("clickReponse", this.onClickResponse);
            this.$bus.$off("onAnswer");
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../assets/theme";

    #main_card {
        width: 40%;
    }

    .card_reponse {
        @extend .card;
        text-align: center;
        font-size: 2em;
        padding: 4%;

        border-style: solid;
        border-width: 5px;
        border-color: $accent;
    }

    .clicked {
        border-color: $secondary;
    }

    .right {
        border-color: green;
    }

    .wrong {
        border-color: red;
    }

</style>