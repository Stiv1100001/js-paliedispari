function isPalindrome(word) {
  return word === word.split('').reverse().join('');
}

function isEvenOrOdd(number) {
  if (number % 2 === 0) return 'pari';
  return 'dispari';
}

document.getElementById('check').addEventListener('click', () => {
  const word = document.getElementById('word').value.toLowerCase();

  const result = document.getElementById('result');

  if (isPalindrome(word)) {
    result.innerHTML = 'È palindroma';
  } else {
    result.innerHTML = 'Non è palindroma';
  }

  log('Done');
});

document.getElementById('play').addEventListener('click', () => {
  const type = document.querySelector('input[name="pd"]:checked').value;

  const userNumber = document.getElementById('number').value;
  const pcNumber = Math.floor(Math.random() * 4 + 1);

  const result = document.getElementById('play-result');

  if (isEvenOrOdd(userNumber + pcNumber) === type) {
    result.innerHTML = 'Hai vinto!';
  } else {
    result.innerHTML = 'Hai perso!';
  }
});
