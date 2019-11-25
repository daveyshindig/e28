<template>
  <div id="app">
    <navbar></navbar>
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
      links: ["home", "about", "mixes"],
      sharedState: app.store
    };
  },
  mounted() {
    this.favorites = new app.Favorites();
    app.store.favoriteCount = this.favorites.favoriteCount;
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
