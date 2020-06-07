const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function alphabetPosition (sentence) {
    let onlyLowerCase = sentence.toLowerCase();
    
    let arraySentence = Array.from(onlyLowerCase);

    let onlyLetters = returnOnlyLetters(arraySentence);

    let onlyNumbers = returnNumbers(onlyLetters);

    let finalResult = onlyNumbers.toString();

    for (let i = 0; i <= onlyNumbers.length-1; i++){
        finalResult = finalResult.replace(',', ' ');
    }

    return finalResult;
}

function returnNumbers (sentence) {
    const alphabetArray = Array.from(alphabet);

    let onlyNumbers = [];

    sentence.forEach(letter => {
        let letterPosition = (alphabetArray.indexOf(letter)) + 1;
        onlyNumbers.push(letterPosition);
    });

    return onlyNumbers;
}

function returnOnlyLetters (arraySentence) {
    const alphabetArray = Array.from(alphabet);
    let onlyLetters = [];

    arraySentence.forEach((character) => {
        alphabetArray.forEach((letter) => {
            if (character === letter) {
                onlyLetters.push(character);
            }
        });
    });

    return onlyLetters;
}

alphabetPosition("The sunset sets at twelve o' clock.");