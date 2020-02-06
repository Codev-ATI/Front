<template>
  <div>
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">
    <NavBar />
    <router-view />
  </div>
</template>

<style lang="scss">

</style>
<script>
  import NavBar from "./components/NavBar";
  export default {
    components: {NavBar}
  }
</script>

<style lang="scss">
  @import "assets/theme";
</style>