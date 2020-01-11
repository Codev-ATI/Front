<template>
    <div>
        <md-app>
            <md-app-toolbar id="toolbar" class="md-primary md-layout">
                <md-button id="button_logo" class="md-raised" to="home">
                    <img id="img_logo" src="../assets/qati_logo.png" />
                </md-button>

                <md-button id="button_rejoindre" class="md-raised md-layout-item" to="rejoindre">
                    Rejoindre une partie
                </md-button>

                <div class="md-toolbar-section-end md-layout-item">
                    <md-button id="button_sample" class="md-raised" to="sample">
                        Exemple question
                    </md-button>

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

    #button_logo {
        max-width: 7%;
        height: 80%;
        text-align: center;
        vertical-align: middle;

        background-color: saddlebrown;
    }

    #img_logo {
        width: 100%;
        height: 100%;
    }

    #button_rejoindre {
        background-color: fuchsia;

        margin-left: 10%;
        margin-right: 10%;
    }

    #button_sample {
        background-color: darkslateblue;
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
