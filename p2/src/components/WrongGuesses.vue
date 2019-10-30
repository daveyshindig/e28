<template>
  <p>
    <span class="wrong_guess">Wrong guesses:</span>
    <span class="wrong_guess" v-for="guess in wrongGuesses">{{ guess }}</span>
  </p>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  props: {
    wrongGuesses: {
      type: Array
    }
  },
  template: "#wrong-guesses"
};
</script>

<style scoped>
.wrong_guess {
  margin-right: 5px;
}
</style>