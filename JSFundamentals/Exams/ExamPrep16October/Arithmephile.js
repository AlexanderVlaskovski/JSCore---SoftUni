function solve(input) {
    let biggest = -Infinity;
    while (input.length > 0) {


        let currentNumber = Number(input.shift());

        if (currentNumber >= 0 && currentNumber < 10) {
            let current = 1;
            for (var j = 0; j < currentNumber; j++) {
                current *= Number(input[j]);


            }

            if (current > biggest) {
                biggest = current;
            }
        }


    }
    console.log(biggest);
}

solve(["0"]);