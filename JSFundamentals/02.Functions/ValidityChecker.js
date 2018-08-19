function validityChecker(input) {
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];
    let x3 = 0;
    let y3 = 0;

    function check(a, b, c, d) {

        let result = Math.sqrt(Math.pow((a-c), 2)+Math.pow((b-d), 2));

        if(Number.isInteger(result)){
            return true;
        }
        else{
            return false;
        }
    }

   if(check(x1,y1,x3,y3)){
        console.log("{%d, %d} to {%d, %d} is valid", x1, y1, x3, y3);
    }
    else{
        console.log("{%d, %d} to {%d, %d} is invalid", x1, y1, x3, y3);

    }

    if(check(x2,y2,x3,y3)){
        console.log("{%d, %d} to {%d, %d} is valid", x2, y2, x3, y3);
    }
    else{
        console.log("{%d, %d} to {%d, %d} is invalid", x2, y2, x3, y3);

    }

    if(check(x1,y1,x2,y2)){
        console.log("{%d, %d} to {%d, %d} is valid", x1, y1, x2, y2);
    }
    else{
        console.log("{%d, %d} to {%d, %d} is invalid", x1, y1, x2, y2);

    }



}

validityChecker([2, 1, 1, 1]);