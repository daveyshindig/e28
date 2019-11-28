<template>
  <b-container fluid class="mixes">
    <b-row class="mix" v-for="mix in mixes" :key="mix.id">
      <b-col no-gutter>
        <b-link class="mix-link" :to="{ name: 'mix', params: { id: mix.id } }">
          <div>
            <b-img class="mix-artwork" :src="mix.artwork_url" alt="cover art" />
            <div class="mix-title">{{mix.title}}</div>
          </div>
        </b-link>
      </b-col>
    </b-row>
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
  text-decoration: none;
}

.mix-title {
  font-size: 1em;
  max-width: 300px;
  margin: 12px 0 24px;
}

.mix-link,
.mix-link:hover {
  text-decoration: none;
}
</style>