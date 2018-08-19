function solve(yield) {
    let days = 0;
    let totalAmount = 0;

    while(yield >= 100){

        totalAmount += yield;
        days++;
        yield -=10;
        totalAmount -=26;
    }
    if(totalAmount <= 26){
        totalAmount = 0;
    }
    else{
        totalAmount -=26;
    }
    console.log(days);
    console.log(totalAmount);


}
solve(200);