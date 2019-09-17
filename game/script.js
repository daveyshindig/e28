var secretNumber = Math.round(Math.random() * 100);
var guessNumber = 0;
var guessButton = document.getElementById('guessButton');
var playAgainButton = document.getElementById('playAgainButton');
var replyP = document.getElementById('reply');
var guessesLeftP = document.getElementById('guessesLeft');
var message = '';

guessButton.onclick = function() {
  guessNumber = guessNumber + 1;
  var guessString = document.getElementById('guessInput').value;
  var guessInt = parseFloat(guessString, 10);

  if (guessNumber >= 10) {
    message = 'Out of guesses!'
    guessButton.classList.add('invisible');
    playAgainButton.classList.remove('invisible');

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
    while (guessesLeftP.firstChild) {
      guessesLeftP.removeChild(guessesLeftP.firstChild);
    }
    message = 'You guessed right!';
    guessButton.classList.add('invisible');
    playAgainButton.classList.remove('invisible');
  }

  var guessesLeft = 10 - guessNumber;
  var guessesLeftStr = guessesLeft.toString();
  var messageNode = document.createTextNode(message);
  var guessesNode = document.createTextNode("You have " + guessesLeftStr + " guesses left.");

  while (replyP.firstChild) {
    replyP.removeChild(replyP.firstChild);
  }

  while (guessesLeftP.firstChild) {
    guessesLeftP.removeChild(guessesLeftP.firstChild);
  }

  replyP.appendChild(messageNode);
  if (guessInt !== secretNumber) {
    guessesLeftP.appendChild(guessesNode);
  }
}

playAgainButton.onclick = function() {
  guessNumber = 0
  secretNumber = Math.round(Math.random() * 100);
  guessButton.classList.remove('invisible');
  playAgainButton.classList.add('invisible');
  var guessesNode = document.createTextNode("You have 10 guesses left.");

  while (replyP.firstChild) {
    replyP.removeChild(replyP.firstChild);
  }

  while (guessesLeftP.firstChild) {
    guessesLeftP.removeChild(guessesLeftP.firstChild);
  }

  guessesLeftP.appendChild(guessesNode);
}