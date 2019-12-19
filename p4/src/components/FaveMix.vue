<template>
  <b-container>
    <span
      class="fav"
      v-if="isFavorite"
      @click="removeFavorite"
      data-test="remove-favorite-btn"
    >&#x2665;</span>
    <span class="fav" v-else @click="addFavorite" data-test="add-favorite-btn">&#x2661;</span>
  </b-container>
</template>

<script>
export default {
  name: "FaveMix",
  props: ["id"],
  data: function() {
    return {};
  },
  methods: {
    addFavorite() {
      this.$store.commit("addFavoriteById", this.id);
    },
    removeFavorite() {
      this.$store.commit("removeFavoriteById", this.id);
    }
  },
  computed: {
    isFavorite: function() {
      return this.$store.getters.isFavoriteById(this.id);
    }
  }
};
</script>

<style scoped>
.fav {
  font-size: 24px;
  color: red;
}
</style>