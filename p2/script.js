function containsLetter(arr) { return function(c) { arr.indexOf(c) > -1 }};
var dictionary = ["pontoon", "incredible", "flight", "buddhism", "desire"];

let app = new Vue({
  el: "#app",
  data: {
    chars: dictionary[Math.ceil(Math.random() * dictionary.length)].split(""),
    guess: "",
    guessNumber: 0,
    guesses: [],
    message: "",
    won: false
  },
  computed: {
    guessCount() {
      return this.guesses.length;
    },
    rightGuesses() {
      return this.guesses.filter(containsLetter(this.chars));
    },
    wrongGuesses() {
      return this.guesses.filter(!containsLetter(this.chars));
    },
    wordDisplay() {
      var arr = [];
      this.chars.forEach(function(c) { 
        if (arr.indexOf(c) > -1) {
          arr.push(c);
        }
        else {
          arr.push('_');
        }
        arr.push(' ');
      });
      return arr.join("");
    }
  },
  methods: {
    takeGuess() {
      this.guessNumber++;
      this.guesses.push(this.guess[0]);
      if (this.chars.containsLetter(this.guess[0]) {
        this.message = "Good guess.";
      } 
      else {
        this.message = "Sorry, no " + this.guess[0] + " in this word.";
      }
    }
  }
});