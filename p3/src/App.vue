<template>
  <div id="app">
    <navbar></navbar>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "mix",
  components: {
    navbar: Navbar
  },
  links: ["home", "about", "mixes"],
  paths: {
    home: "/",
    about: "/about",
    mixes: "/mixes"
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
