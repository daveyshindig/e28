<template>
  <iframe
    width="430"
    height="430"
    scrolling="no"
    frameborder="no"
    allow="autoplay"
    :src="'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + id + '&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true'"
  ></iframe>
</template>

<script>
import * as app from "./../../app.js";

export default {
  name: "ShowMix",
  props: ["id"],
  data: function() {
    return {
      mix: null
    };
  },
  mounted() {
    app.axios.get(app.config.api + "/mixes/" + this.id).then(response => {
      this.mix = response.data;
    });
  }
};
</script>

<style scoped>
iframe {
  margin: 0 18px;
}
</style>