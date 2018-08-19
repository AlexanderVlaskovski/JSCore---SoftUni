function solve(inputNumber) {

    let num = inputNumber.toString();
    let length = num.length;
    let sumOfNum = 0;

    for (var i = 0; i < length; i++) {
        sumOfNum += parseInt(num[i]);

    }

    while(sumOfNum / length <= 5){
        num+="9";
        length++;
        sumOfNum+=9;
    }

    console.log(num);

}
solve(1111);