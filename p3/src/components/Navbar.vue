<template>
  <b-navbar>
    <b-navbar-brand :to="{ name: 'home' }">
      <img
        src="../../public/img/logo.png"
        class="d-inline-block align-top navbar-logo"
        alt="808 MIX logo"
      />
    </b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item :to="{ name: 'home' }" exact>Home</b-nav-item>
      <b-nav-item :to="{ name: 'about' }">About</b-nav-item>
      <b-nav-item :to="{ name: 'favorites' }">Favorites</b-nav-item>
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

<style>
* {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.navbar-logo {
  max-height: 30px;
}
</style>