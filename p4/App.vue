<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import * as app from "./app.js";
import Navbar from "./src/components/Navbar.vue";

export default {
  name: "app",
  components: {
    navbar: Navbar
  },
  data: function() {
    return {
      links: ["home", "about", "mix"]
    };
  },
  mounted() {
    let favorites = new app.Favorites();
    console.log("mounted");
    console.log(favorites.getFavorites());
    this.$store.commit("setFavorites", favorites.getFavorites());
    this.$store.dispatch("setMixes");
  }
};
</script>

<style>
#app {
  color: #333333;
}
.router-link-active {
  color: #88bbaa !important;
}
</style>
