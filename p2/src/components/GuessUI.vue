<template>
  <div v-if="count < 8 && !won">
    <input
      v-bind="guess"
      v-on:input="$emit('input', $event.target.value)"
      placeholder="Guess a letter"
    />
    <button id="guessButton" @click="$emit('take-guess')">Guess</button>
  </div>
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
    },
    guess: {
      type: String,
      default: ""
    }
  },
  template: "#guess-ui"
};
</script>