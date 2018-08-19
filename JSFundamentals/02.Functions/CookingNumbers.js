function solve(input) {
    let number = input[0];
    for (var i = 1; i < input.length; i++) {
        let currentOperation = input[i];
        function operation(operation, number) {
            switch (operation){
                case "chop": return number/2;
                case "dice": return Math.sqrt(number);
                case "spice": return number+=1;
                case "bake": return number*=3;
                case "fillet": return number =number - (0.2*number);
            }
        }
        number = operation(currentOperation, number);
        console.log(number);

    }

}
solve([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);