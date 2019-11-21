<template>
  <div id="app">
    <navbar></navbar>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  el: "#app",
  name: "808MIX",
  components: {
    navbar: Navbar
  }
};
</script>

<style>
#app {
}
</style>
