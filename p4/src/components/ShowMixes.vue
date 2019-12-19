<template>
  <b-container class="mixes">
    <b-col class="mix" data-test="mix" v-for="mix in mixes" :key="mix.id">
      <b-link class="mix-link" data-test="mix-link" :to="{ name: 'mix', params: { id: mix.id } }">
        <div>
          <b-img
            class="mix-artwork"
            v-bind:data-test='"mix-artwork-" + mix.artwork_url'
            :src="mix.artwork_url"
            alt="cover art"
          />
          <div class="mix-title" data-test="mix-title">{{mix.title}}</div>
        </div>
      </b-link>
    </b-col>
  </b-container>
</template>

<script>
export default {
  name: "ShowMixes",
  data: function() {
    return {};
  },
  mounted() {},
  computed: {
    mixes: function() {
      return this.$store.state.mixes;
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