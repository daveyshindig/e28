<template>
  <div>{{wordDisplay}}</div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  props: {
    wordDisplay: {
      type: String,
      default: ""
    }
  },
  template: "#word-display"
};
</script>