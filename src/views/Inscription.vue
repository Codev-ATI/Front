<template>
    <div>
        <div id="div_main" class="div-round">
            <md-card id="card_titre" class="card-title md-accent">
                <md-card-header class="md-title">
                    Inscription
                </md-card-header>
            </md-card>

            <md-card id="card_pseudo" class="card-left md-accent">
                <md-card-content>
                    <div class="md-layout div_input">
                        <md-icon class="icon">person</md-icon>

                        <span class="md-accent md-layout-item">
                            Pseudo
                        </span>

                        <input type="text" class="md-layout-item input md-elevation-8" v-model="pseudo" />
                    </div>
                </md-card-content>
            </md-card>

            <md-card id="card_email" class="card-right md-accent">
                <md-card-content>
                    <div class="md-layout div_input">
                        <md-icon class="icon">email</md-icon>

                        <span class="md-accent md-layout-item">
                            Adresse mail
                        </span>

                        <input type="text" class="md-layout-item input md-elevation-8" v-model="mail" />
                    </div>
                </md-card-content>
            </md-card>

            <md-card id="card_motdepasse" class="card md-accent">
                <md-card-content>
                    <div class="md-layout div_input">
                        <md-icon class="icon">vpn_key</md-icon>

                        <span class="md-accent md-layout-item">
                            Mot de passe
                        </span>

                        <input type="password" class="md-layout-item input md-elevation-8" v-model="password1" />
                    </div>

                    <div class="md-layout div_input">
                        <md-icon class="icon">vpn_key</md-icon>

                        <span class="md-accent md-layout-item">
                            Confirmation
                        </span>

                        <input type="password" class="md-layout-item input md-elevation-8" v-model="password2" />
                    </div>
                </md-card-content>
            </md-card>
        </div>

        <md-card id="div_error" class="div md-primary" :style="{visibility: checkPasswords ? 'hidden' : 'visible'}">
                Mots de passe différents
        </md-card>

        <div id="div_button">
            <md-button id="button_creer" class="button-round md-accent md-raised" :disabled="!checkPage">
                Créer
            </md-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Inscription",
        data: () => ({
            pseudo: null,
            mail: null,
            password1: null,
            password2: null
        }),
        computed: {
            checkPasswords() {
                if (this.password1 == null || this.password2 == null) return true;
                if (this.password1 === "" || this.password2 === "") return true;
                return this.password1 === this.password2;
            },

            checkPage() {
                if (this.pseudo == null || this.pseudo === "") return false;
                if (this.mail == null || this.mail === "") return false;

                if (this.password1 == null || this.password2 == null) return false;
                if (this.password1 === "" || this.password2 === "") return false;
                return this.password1 === this.password2;
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../assets/theme";
    @import "../assets/global";

    #div_main {
        width: 60%;
        margin-left: 20%;
        padding-bottom: 1%;
    }

    #card_titre {
        margin-top: 5%;
    }

    .md-title {
        text-align: center;
    }

    .div_input {
        width: 70%;
        text-align: center;
        margin: 2% auto auto;
    }

    #div_button {
        text-align: center;
        margin-top: 5%;
    }

    #div_error {
        width: 15%;
        text-align: center;
        margin: auto;
        z-index: -1;

        border-bottom-right-radius: 20px;
        border-bottom-left-radius: 20px;
    }

</style>
