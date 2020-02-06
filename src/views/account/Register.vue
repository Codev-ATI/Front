<template>
    <div>
        <div id="div_main" class="div-round md-elevation-4">
            <md-card id="card_titre" class="card-title md-accent">
                <md-card-header class="md-title">
                    Inscription
                </md-card-header>
            </md-card>

            <md-card class="card-left md-accent">
                <md-card-header>
                    <div class="md-layout">
                        <span class="md-layout-item md-size-10" />

                        <md-icon class="icon md-layout-item md-size-15">person</md-icon>

                        <md-content class="md-accent md-layout-item md-size-25">
                            Pseudo
                        </md-content>

                        <span class="md-layout-item md-size-5" />

                        <input type="text" class="md-layout-item input md-elevation-8 md-size-35" v-model="pseudo" />

                        <span class="md-layout-item md-size-10" />
                    </div>
                </md-card-header>
            </md-card>

            <md-card class="card-right md-accent">
                <md-card-header>
                    <div class="md-layout">
                        <span class="md-layout-item md-size-10" />

                        <md-icon class="icon md-layout-item md-size-15">email</md-icon>

                        <md-content class="md-accent md-layout-item md-size-25">
                            Adresse mail
                        </md-content>

                        <span class="md-layout-item md-size-5" />

                        <input type="text" class="md-layout-item input md-elevation-8 md-size-35" v-model="mail" />

                        <span class="md-layout-item md-size-10" />
                    </div>
                </md-card-header>
            </md-card>

            <md-card class="card md-accent">
                <md-card-header>
                    <div class="md-layout">
                        <span class="md-layout-item md-size-10" />

                        <md-icon class="icon md-layout-item md-size-15">vpn_key</md-icon>

                        <md-content class="md-accent md-layout-item md-size-25">
                            Mot de passe
                        </md-content>

                        <span class="md-layout-item md-size-5" />

                        <input type="password" class="md-layout-item input md-elevation-8 md-size-35" v-model="password1" />

                        <span class="md-layout-item md-size-10" />
                    </div>
                </md-card-header>

                <md-card-content>
                    <div class="md-layout">
                        <span class="md-layout-item md-size-10" />

                        <md-icon class="icon md-layout-item md-size-15">vpn_key</md-icon>

                        <md-content class="md-accent md-layout-item md-size-25">
                            Confirmation
                        </md-content>

                        <span class="md-layout-item md-size-5" />

                        <input type="password" class="md-layout-item input md-elevation-8 md-size-35" v-model="password2" />

                        <span class="md-layout-item md-size-10" />
                    </div>
                </md-card-content>
            </md-card>
        </div>

        <md-card id="div_error" class="div md-primary" :style="{visibility: checkPasswords ? 'hidden' : 'visible'}">
                Mots de passe différents
        </md-card>

        <div id="div_button">
            <md-button id="button_creer" class="button-round md-accent md-raised" :disabled="!checkPage" @click="inscription">
                Créer
            </md-button>
        </div>

        <LoadingBar v-if="loading" />

        <md-snackbar md-position="center" :md-duration="3000" :md-active.sync="identifiantExists">
            <span id="snackbar">Adresse mail déjà utilisée</span>
        </md-snackbar>
    </div>
</template>

<script>
    import LoadingBar from "../../components/LoadingBar";
    import AuthService from "../../services/AuthService";

    export default {
        name: "Register",
        components: {LoadingBar},
        mounted () {
            if (AuthService.hasToken()) {
                this.$router.push("/");
            }
        },
        data: () => ({
            pseudo: null,
            password1: null,
            mail: null,
            password2: null,
            identifiantExists: false,
            loading: false
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
        },
        methods: {
            async inscription() {
                this.loading = true;

                var response = await AuthService.register(this.mail, this.password1, this.pseudo);
                if (response == true) {
                    this.$router.push("/login");
                } else if (response == "400") {
                    // identifiant deja utilise
                    this.identifiantExists = true;
                    this.loading = false;
                }
            }
        }
    }
</script>

<style scoped lang="scss">

    #div_main {
        width: 60%;
        margin-left: 20%;
        padding-bottom: 1%;
    }

    #card_titre {
        margin-top: 5%;
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

    #snackbar {
        text-align: center;
        margin: auto;
    }

</style>
