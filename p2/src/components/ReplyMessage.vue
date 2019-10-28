<template>
  <p>{{message}}</p>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  props: {
    message: {
      type: String,
      default: ""
    }
  },
  template: "#reply-message"
};
</script>