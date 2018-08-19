function capture(text) {
    let tokens = text.join("");
    let regex = /\d+/g;
        console.log(tokens.match(regex).join(" "));
}

