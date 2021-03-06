import Vue from 'vue';
import GuessUI from './components/GuessUI.vue';
import ReplyMessage from './components/ReplyMessage.vue';
import WordDisplay from './components/WordDisplay.vue';
import WrongGuesses from './components/WrongGuesses.vue';
import PlayAgain from './components/PlayAgain.vue';

var dictionary = ["pontoon", "incredible", "flight", "buddhism", "desire"];

let app = new Vue({
  el: "#app",
  components: {
    'guess-ui': GuessUI,
    'reply-message': ReplyMessage,
    'word-display': WordDisplay,
    'wrong-guesses': WrongGuesses,
    'play-again': PlayAgain
  },
  data: {
    chars: dictionary[Math.floor(Math.random() * dictionary.length)].split(""),
    guess: "",
    guesses: [],
    message: "",
    won: false
  },
  computed: {
    guessCount() {
      return this.guesses.length;
    },
    rightGuesses() {
      return this.guesses.filter(guess => this.chars.indexOf(guess[0]) > -1);
    },
    wrongGuesses() {
      return this.guesses.filter(guess => this.chars.indexOf(guess[0]) === -1);
    },
    wrongGuessCount() {
      this.guesses.filter(guess => this.chars.indexOf(guess[0]) === -1).length;
    },
    wordDisplay() {
      // why?
      let that = this;
      var arr = [];
      that.chars.forEach(function (c) {
        if (that.guesses.indexOf(c) > -1) {
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
      let that = this;
      that.guesses.push(that.guess[0]);

      if (that.chars.indexOf(that.guess[0]) > -1) {
        // we've won if we've guessed every letter in the word
        let guessedAll = true;
        that.chars.forEach(function (c) {
          if (that.guesses.indexOf(c) === -1) {
            guessedAll = false;
          }
        });

        // get the number of chars in the word that match the guess
        let n = 0;
        that.chars.forEach(function (c) {
          if (c === that.guess[0]) {
            n = n + 1;
          }
        });

        if (guessedAll) {
          that.won = true;
          that.message = "Congratulations! You win.";
        }
        else if (n === 1) {
          that.message = "There is one '" + that.guess[0] + "' in this word.";
        }
        else {
          that.message = "There are " + n + " '" + that.guess[0] + "'s in this word.";
        }
      }
      else if (that.wrongGuesses.length >= 8) {
        that.message = "You lose this round.";
      }
      else {
        that.message = "Sorry, no " + that.guess[0] + " in this word.";
      }
    },
    playAgain() {
      this.chars = dictionary[Math.floor(Math.random() * dictionary.length)].split("");
      this.guess = "";
      this.guesses = [];
      this.message = "";
      this.won = false;
    }
  }
});