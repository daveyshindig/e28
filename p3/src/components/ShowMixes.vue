<template>
  <b-container fluid class="mixes">
    <b-col class="mix" v-for="mix in mixes" :key="mix.id">
      <b-link class="mix-link" :to="{ name: 'mix', params: { id: mix.id } }">
        <b-img class="mix-artwork" :src="mix.artwork_url" alt="cover art" />
        <div class="mix-title">{{mix.title}}</div>
      </b-link>
    </b-col>
  </b-container>
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
.mixes {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.mix {
  margin: 0 0 32px;
  text-decoration: none;
}

.mix-title {
  max-width: 300px;
  margin-top: 8px;
}

.mix-link,
.mix-link:hover {
  text-decoration: none;
}
</style>