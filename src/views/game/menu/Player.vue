<template>
    <md-card id="card_player" class="div-round card-center">
        <md-card-header class="md-layout">
            <md-icon v-if="player.ready" class="md-layout-item md-size-5">how_to_reg</md-icon>
            <md-icon v-if="!player.ready" class="md-layout-item md-size-5">emoji_people</md-icon>

            <md-content id="content_pseudo" class="md-layout-item md-size-90">
                {{ getPseudoField() }}
            </md-content>

            <span class="md-layout-item md-size-5" />
        </md-card-header>
    </md-card>
</template>

<script>
    import Player from "../../../objects/Player";
    import RoomService from "../../../services/RoomService";

    export default {
        name: "Player",
        props: {
            player: {
                required: true,
                type: Player
            }
        },
        methods: {
            getPseudoField() {
                if (this.player.id == RoomService.instance.userId) {
                    return this.player.pseudo + " (vous)";
                } else {
                    return this.player.pseudo;
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../assets/theme";

    #card_player {
        width: 50%;
        background-color: $secondary;
    }

    #content_pseudo {
        text-align: center !important;
        background-color: transparent;
        margin: auto !important;
    }

</style>