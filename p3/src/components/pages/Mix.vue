<template>
  <show-mix :id="id"></show-mix>
</template>

<script>
import ShowMix from "./../ShowMix.vue";

export default {
  name: "Mix",
  components: { ShowMix },
  props: ["id"],
  data: function() {
    return {
      mix: null
    };
  }
};
</script>

<style scoped>
.container {
  margin: 0;
}
</style>