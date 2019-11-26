<template>
  <div class="mixes">
    <div class="track" v-for="mix in mixes" :key="mix.id">
      {{mix.title}}
      <img class="mix-artwork" :src="mix.artwork_url" />
    </div>
  </div>
</template>

<script>
import * as app from "./../../app.js";

export default {
  name: "ShowMixes",
  data: function() {
    return {
      mixes: []
    };
  },
  mounted() {
    this.mixes = app.axios.get(app.config.api + "/mixes").then(response => {
      this.mixes = response.data;
    });
  }
};
</script>

<style scoped>
</style>