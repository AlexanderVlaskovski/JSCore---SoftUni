function capitalize(text) {
    let tokens = text.split(" ");

    for (var i = 0; i < tokens.length; i++) {
        let currentWord = tokens[i].split("");
        currentWord[0] = currentWord[0].toUpperCase();
        for (var j = 1; j < currentWord.length; j++) {
            currentWord[j] = currentWord[j].toLocaleLowerCase();

        }
        tokens[i] = currentWord.join("");

    }


    console.log(tokens.join(" "));
}

capitalize("blA bla bla");