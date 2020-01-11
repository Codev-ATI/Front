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
  </div>
</template>

<script>

export default {
  name: 'home',
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

  #div_logo {
    text-align: center;
  }


</style>
