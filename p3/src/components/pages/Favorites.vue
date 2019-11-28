<template>
  <b-container fluid class="mixes">
    <b-col class="mix" v-for="mix in mixes" :key="mix.id">
      <b-link class="mix-link" :to="{ name: 'mix', params: { id: mix.id } }">
        <div>
          <b-img class="mix-artwork" :src="mix.artwork_url" alt="cover art" />
          <div class="mix-title">{{mix.title}}</div>
        </div>
      </b-link>
    </b-col>
  </b-container>
</template>

<script>
import * as app from "./../../../app.js";

export default {
  name: "Favorites",
  data: function() {
    return {
      mixes: []
    };
  },
  mounted() {
    let that = this;
    let favorites = new app.Favorites();
    let faves = favorites.getFavorites();
    app.axios.get(app.config.api + "/mixes").then(response => {
      faves.forEach(function(fave) {
        let mix = response.data.find(mix => mix.id == fave.id);
        if (mix !== null && mix !== undefined) {
          that.mixes.push(mix);
        }
      });
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