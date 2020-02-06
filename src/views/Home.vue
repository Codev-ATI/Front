<template>
  <div>
    <div id="div_main" class="div-round md-elevation-4">
      <md-card id="card_titre" class="card-title md-accent">
        <md-card-header class="md-title">
          Bienvenue sur
        </md-card-header>
      </md-card>

      <div id="div_logo">
        <img id="image" src="../assets/qati_logo.png">
      </div>
    </div>

    <div id="div_text" class="div-round md-elevation-4">
      <span class="md-body-2">
        Répondez sans limite à de nombreux quiz ! Rejoignez ou créez directement une partie en cliquant sur "JOUER !"<br>
        Connectez-vous ou créez-vous un compte pour créer vos propres quiz !
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

  #image {
    width: 60%;
  }


</style>
