function solve(input) {
    let delimeter = input[input.length - 1];
    let toPrint = [];
    for (var i = 0; i < input.length-1; i++) {

        toPrint.push(input[i]);

    }
    console.log(toPrint.join(delimeter));
    
}

solve(["One", "Two", "Three", "Four", "-"]);