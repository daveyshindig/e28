<template>
  <button @click="$emit('play-again')" v-if="count >= 8 || won">Play Again</button>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  props: {
    count: {
      type: Number,
      default: 0
    },
    won: {
      type: Boolean,
      default: false
    }
  },
  template: "#play-again"
};
</script>
