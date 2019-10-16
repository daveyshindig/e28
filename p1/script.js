let app = new Vue({
  el: "#app",
  data: {
    secretNumber: Math.round(Math.random() * 100),
    guessNumber: 0,
    guess: null,
    message: "",
    won: false
  },
  methods: {
    takeGuess() {
      this.guessNumber = this.guessNumber + 1;
      var guessInt = parseFloat(this.guess, 10);

      if (this.guessNumber >= 10) {
        this.message = 'Out of guesses!'
      };

      if (typeof guessInt === 'number' && isNaN(guessInt) ||
          typeof guessInt !== 'number' || Math.round(guessInt) != guessInt) {
        this.message = 'Please enter an integer.';
      }
      else if (guessInt < this.secretNumber) {
        this.message = 'Your guess was too low.';
      }
      else if (guessInt > this.secretNumber) {
        this.message = 'Your guess was too high.';
      }
      else if (guessInt == this.secretNumber) {
        this.message = 'You guessed right!';
        this.won = true;
      };
    },

    playAgain() {
      this.won = false;
      this.secretNumber = Math.round(Math.random() * 100);
      this.guessNumber = 0;
      this.message = "";
    }
  }
});