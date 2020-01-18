<template>
  <div>
    <div id="div_main" class="div-round">
      <md-card id="card_titre" class="card-title md-accent">
        <md-card-header class="md-title">
          Bienvenue sur le site
        </md-card-header>
      </md-card>

      <div id="div_logo">
        <img src="../assets/qati_logo.png">
      </div>
    </div>

    <div id="div_text" class="div-round">
      <span class="md-body-2">
        Répondez sans limites à de nombreux quizz ! Rejoingnez ou créez directement une partie en cliquant sur "JOUER !"<br>
        Connectez-vous ou créez-vous un compte pour consulter votre historique, ou créer vos propres quizz !
      </span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
}
</script>

<style scoped lang="scss">
  @import "../assets/theme";

  #div_main, #div_text {
    width: 60%;
    margin-left: 20%;
    padding-bottom: 1%;
  }

  #div_text {
    margin-top: 2%;
    padding-top: 1%;
    text-align: center;
  }

  #card_titre {
    margin-top: 5%;
  }

  .md-title {
    text-align: center;
  }

  #div_logo {
    text-align: center;
  }


</style>
