<template>
  <b-container>
    <iframe
      width="430"
      height="430"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      :src="'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + id + '&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true'"
    ></iframe>
    <fave-mix :id="id"></fave-mix>
  </b-container>
</template>

<script>
import FaveMix from "./FaveMix.vue";

export default {
  name: "ShowMix",
  components: { FaveMix },
  props: ["id"],
  data: function() {
    return {};
  }
};
</script>

<style scoped>
iframe {
  margin: 0 18px;
}
</style>