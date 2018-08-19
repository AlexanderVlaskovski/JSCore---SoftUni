function solve(text) {
    let regex = /\b_[A-Za-z0-9]+\b/g;
    console.log(text.match(regex).map(word=>word.substr(1)).join(","));
    
}

solve('Calculate the _area of the _perfectRectangle object.')