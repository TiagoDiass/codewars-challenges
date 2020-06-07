function disemvowel(str) {
    let characters = str.split('');
    
    characters.forEach((character, chIndex) => {
        if (/[aeiouAEIOU]/.test(character)) {
            delete characters[chIndex];
        }
    });

    let finalString = '';

    characters.forEach(character => {
        finalString = finalString.concat(character);
    });

    return finalString;
}

disemvowel("This website is for losers LOL, don't you think? yaa");
