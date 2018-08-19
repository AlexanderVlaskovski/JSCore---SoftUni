function solve(a, b, c) {
    if((b*b - 4 * a * c) > 0) {
        let result = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
        let result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
        if(result > result2){
            console.log(result2 + " " + result);
        }
        else {
            console.log(result + " " + result2);

        }
    }
    else if ((b*b - 4 * a * c) === 0){
        let result = -b/2*a;
        console.log(result);
    }
    else
        console.log("No");
}

solve([5, 2, 1])
