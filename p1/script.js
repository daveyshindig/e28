let makeGuess = function(secretNumber, guessNumber, guess, message) {
  guessNumber = guessNumber + 1;
  var guessInt = parseFloat(guess, 10);

  if (guessNumber >= 10) {
    message = 'Out of guesses!'
  }

  if (typeof guessInt === 'number' && isNaN(guessInt) ||
      typeof guessInt !== 'number' || Math.round(guessInt) != guessInt) {
    message = 'Please enter an integer.';
  }
  else if (guessInt < secretNumber) {
    message = 'Your guess was too low.';
  }
  else if (guessInt > secretNumber) {
    message = 'Your guess was too high.';
  }
  else if (guessInt == secretNumber) {
    message = 'You guessed right!';
  }

  console.log(guessNumber);
};

let app = new Vue({
  el: "#app",
  data: {
    secretNumber: Math.round(Math.random() * 100),
    guessNumber: 0,
    guess: null,
    makeGuess: makeGuess,
    message: ""
  }
});