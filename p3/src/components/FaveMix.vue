<template>
  <b-container>
    <span v-if="favorited" @click="removeFavorite">&#x2665;</span>
    <span v-else @click="addFavorite">&#x2661;</span>
  </b-container>
</template>

<script>
import * as app from "./../../app.js";

export default {
  name: "FaveMix",
  props: ["id"],
  data: function() {
    return {
      favorited: null
    };
  },
  methods: {
    addFavorite() {
      let favorites = new app.Favorites();
      favorites.add(this.id);
      this.favorited = true;
    },
    removeFavorite() {
      let favorites = new app.Favorites();
      favorites.remove(this.id);
      this.favorited = false;
    }
  },
  mounted() {
    let favorites = new app.Favorites();
    this.favorited = favorites.getFavorite(this.id);
  }
};
</script>

<style scoped>
span {
  size: 24px;
  color: red;
}
</style>