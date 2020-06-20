function transformIntoNumber(letter) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let number = 0;

  vowels.forEach((vowel, index) => {
    if (letter === vowel)
      number = index + 1;
  });

  return number;
}

function transformIntoVowel(number) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelToReturn = '';

  vowels.forEach((vowel, index) => {
    if (vowels.indexOf(vowel) + 1 == number) {
      vowelToReturn = vowel;
    }
  });

  return vowelToReturn;
}

function encode(string) {
  let charactersArr = string.split('');

  charactersArr = charactersArr.map(character => {
    return /[aeiou]/.test(character) ? transformIntoNumber(character) : character;
  });

  return charactersArr.join('');
}

function decode(string) {
  let charactersArr = string.split('');

  charactersArr = charactersArr.map(character => {
    return /[12345]/.test(character) ? transformIntoVowel(character) : character;
  });

  return charactersArr.join('');
}

console.log(encode('hello there'));
console.log(decode('h2ll4 th2r2'));