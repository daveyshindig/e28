<template>
  <b-navbar type="dark">
    <b-navbar-brand href="#">
      <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="Kitten" />
      808MIX
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
