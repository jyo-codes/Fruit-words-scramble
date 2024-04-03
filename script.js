const words = ['apple', 'banana', 'orange', 'grape', 'kiwi','peach',
'mango','lemon',
'cherry',
'pear',
'strawberry',
'blueberry',
'raspberry',
'apricot',
'coconut',
'avocado',
'grapefruit',
'lychee',
'guava',
'cherry',
'pear',
'plum',
'pineapple',
'watermelon',
'fig',
'lime',
'papaya',
'cranberry',
'melon'];
let currentWord, scrambledWord;
let score = 0;
let attempts = 3;

function startGame() {
  score = 0;
  attempts = 3;
  document.getElementById('result').textContent = '';
  displayWord();
  document.getElementById('game').style.display = 'block';
}

function displayWord() {
  currentWord = words[Math.floor(Math.random() * words.length)];
  scrambledWord = scramble(currentWord);
  document.getElementById('word').textContent = scrambledWord;
}

function scramble(word) {
  return word.split('').sort(() => Math.random() - 0.5).join('');
}

function submitGuess() {
  const guess = document.getElementById('input').value.toLowerCase();
  if (guess === currentWord) {
    score++;
    document.getElementById('result').textContent = 'Correct!';
  } else {
    attempts--;
    document.getElementById('result').textContent = 'Incorrect. ' + attempts + ' attempts remaining.';
  }

  if (attempts === 0) {
    endGame();
  } else {
    displayWord();
    document.getElementById('input').value = '';
  }
}

function endGame() {
  document.getElementById('result').textContent = 'Game over! Your score: ' + score;
  document.getElementById('word').textContent = '';
  document.getElementById('game').style.display = 'none';
}
