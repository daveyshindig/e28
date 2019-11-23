<template>
  <b-navbar>
    <b-navbar-brand href="#">
      <img src="../../public/img/logo.png" class="d-inline-block align-top logo" alt="808 MIX logo" />
    </b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item to="home">Home</b-nav-item>
      <b-nav-item to="about">About</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  template: "#navbar"
};
</script>

<style scoped>
.logo {
  max-height: 30px;
}
</style>