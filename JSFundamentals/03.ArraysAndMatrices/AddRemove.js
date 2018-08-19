function solve(input) {

    let toPrint =[];
    let counter = 0;

    for (var i = 0; i < input.length; i++) {
        counter++;
        if(input[i] === "add"){
            toPrint.push(counter);
        }
        else if(input[i] === "remove"){
            toPrint.pop();
        }

    }

    if(toPrint.length > 0){
        console.log(toPrint.join("\n"));
    }
    else{
        console.log("Empty");
    }

}

solve(["add", "add", "remove", "remove", "remove"]);