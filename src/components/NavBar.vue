<template>
    <div>
        <md-app>
            <md-app-toolbar class="md-primary md-layout">
                <span class="md-title md-layout-item">
                    Codev ATI
                </span>

                <md-button id="button_rejoindre" class="md-raised md-layout-item">
                    Rejoindre une partie
                </md-button>

                <div class="md-toolbar-section-end md-layout-item">
                    <md-button id="button_inscription" class="md-raised" to="inscription">
                        Inscription
                    </md-button>

                    <md-button id="button_connexion" class="md-raised" to="connexion">
                        Connexion
                    </md-button>
                </div>
            </md-app-toolbar>
        </md-app>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped lang="scss">

    .md-app {
        border: 1px solid rgba(#000, .12);
    }

    #button_rejoindre {
        background-color: fuchsia;

        margin-left: 10%;
        margin-right: 10%;
    }

    #button_inscription {
        background-color: darkorchid;
    }

    #button_connexion {
        background-color: darkmagenta;
    }

    #button_rejoindre, #button_inscription, #button_connexion, .icon {
        color: white !important;
    }

    .md-title {
        color: blueviolet !important;
    }

</style>