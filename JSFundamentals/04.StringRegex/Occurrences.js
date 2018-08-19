function find(text, word){
    let regexToUse = new RegExp(`\\b${word}\\b`, "ig");
    console.log(text.match(regexToUse).length);
}
find("ab ba ab",
    "ab");