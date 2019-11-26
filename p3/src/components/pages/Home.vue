<template>
  <div>
    <show-mixes></show-mixes>
  </div>
</template>

<script>
import ShowMixes from "./../ShowMixes.vue";

export default {
  name: "Home",
  components: { ShowMixes },
  data: function() {
    return {};
  },
  template: "#home"
};
</script>