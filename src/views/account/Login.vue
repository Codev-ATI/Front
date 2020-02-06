<template>
    <div>
        <div id="div_main" class="div-round md-elevation-4">
            <md-card id="card_titre" class="card-title md-accent">
                <md-card-header class="md-title">
                    Connexion
                </md-card-header>
            </md-card>

            <md-card class="card-left md-accent">
                <md-card-header>
                    <div class="md-layout">
                        <span class="md-layout-item md-size-10" />

                        <md-icon class="icon md-layout-item md-size-15">person</md-icon>

                        <md-content class="md-accent md-layout-item md-size-25">
                            Adresse mail
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

                        <md-icon class="icon md-layout-item md-size-15">vpn_key</md-icon>

                        <md-content class="md-accent md-layout-item md-size-25">
                            Mot de passe
                        </md-content>

                        <span class="md-layout-item md-size-5" />

                        <input type="password" class="md-layout-item input md-elevation-8 md-size-35" v-model="password" />

                        <span class="md-layout-item md-size-10" />
                    </div>
                </md-card-header>
            </md-card>
        </div>

        <div id="div_button">
            <md-button id="button_connecter" class="button-round md-accent md-raised" :disabled="!checkPage" @click="connexion">
                Se connecter
            </md-button>
        </div>

        <LoadingBar v-if="loading" />

        <md-snackbar md-position="center" :md-duration="3000" :md-active.sync="showSnackbar">
            <span id="snackbar">Identifiant ou mot de passe incorrect</span>
        </md-snackbar>
    </div>
</template>

<script>
    import LoadingBar from "../../components/LoadingBar";
    import AuthService from "../../services/AuthService";

    export default {
        name: "Login",
        components: {LoadingBar},
        mounted () {
          if (AuthService.hasToken()) {
              this.$router.push("/");
          }
        },
        data: () => ({
            pseudo: null,
            password: null,
            loading: false,
            showSnackbar: false
        }),
        computed: {
            checkPage() {
                if (this.pseudo == null || this.pseudo === "") return false
                if (this.password == null || this.password === "") return false
                return true
            }
        },
        methods: {
            async connexion() {
                this.loading = true;

                if ((await AuthService.connect(this.pseudo, this.password)) == true) {
                    this.$router.push("/");
                } else {
                    this.loading = false;
                    this.showSnackbar = true;
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

    #div_button {
        text-align: center;
        margin-top: 5%;
    }

    #snackbar {
        text-align: center;
        margin: auto;
    }

</style>
