<template>
  <b-container class="mixes" v-if="hasFavorites">
    <b-col class="mix" v-for="mix in favMixes" :key="mix.id" data-test="mix">
      <b-link class="mix-link" :to="{ name: 'mix', params: { id: mix.id } }" data-test="mix-link">
        <div>
          <b-img class="mix-artwork" :src="mix.artwork_url" alt="cover art" />
          <div class="mix-title">{{ mix.title }}</div>
        </div>
      </b-link>
    </b-col>
  </b-container>
  <b-container v-else>
    <h5>You haven't saved any favorites yet.</h5>
    <h6>Click the heart icon under a mix to save one.</h6>
  </b-container>
</template>

<script>
export default {
  name: "Favorites",
  data: function() {
    return {};
  },
  computed: {
    favMixes() {
      return this.$store.getters.getFavorites;
    },
    hasFavorites() {
      return this.$store.getters.hasFavorites;
    }
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