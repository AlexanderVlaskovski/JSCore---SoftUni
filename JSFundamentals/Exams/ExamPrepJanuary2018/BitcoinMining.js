function solve(input) {

    let amountOfmoney = 0;
    let dayOfBuying = [];
    let bitcoins = 0;

    input = input.map(e=>Number(e));

    for (let i =0 ; i < input.length; i++) {

        if((i+1) % 3 === 0){

           amountOfmoney+= (input[i]- 0.3 * input[i]) * 67.51;
        }
        else{

            amountOfmoney+= input[i] * 67.51;
        }

        if(amountOfmoney >= 11949.16){
            dayOfBuying.push(i+1);
            let currentBitcoin = Math.floor(amountOfmoney / 11949.16);
            bitcoins += currentBitcoin;
            amountOfmoney -= currentBitcoin * 11949.16;
        }

    }

    console.log("Bought bitcoins: " + bitcoins);
    if(dayOfBuying.length !== 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfBuying.shift()}`);
    }
    console.log(`Left money: ${amountOfmoney.toFixed(2)} lv.`);


}

solve(['3124.15',
    '504.212',
    '2511.124']);