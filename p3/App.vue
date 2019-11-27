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
      links: ["home", "about", "mix"],
      sharedState: app.store
    };
  },
  mounted() {
    this.favorites = new app.Favorites();
    app.store.favoriteCount = this.favorites.count();
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
