const pipe = require("../pipe/pipe");
const ALPHABET = "abcdefjhijklmnopqrstuvwxyz";

const lowercase = (str) => str.toLocaleLowerCase();

const split = (str) => str.split("");

const getOnlyLetters = (array) => array.filter((ch) => ALPHABET.includes(ch));

const getArrayOfIndexOfEachLetter = (letters) =>
  letters.map((letter) => ALPHABET.indexOf(letter) + 1); // plus 1 because the expected return is a === 1 instead of a === 0

const joinIndexes = (indexes) => indexes.join(" ");

module.exports = pipe(
  lowercase,
  split,
  getOnlyLetters,
  getArrayOfIndexOfEachLetter,
  joinIndexes
);
