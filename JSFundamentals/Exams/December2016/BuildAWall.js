function solve(input) {
    input = input.map(e=>Number(e));


    let min = input.sort((a, b)=> b - a ).pop();

    input.push(min);

    let days = 30 - min;

    let concretePerDay = [];

    while(days !== 0){

        let currentConcrete = 0;

        for (var i = 0; i < input.length; i++) {

            if(input[i] < 30){
                input[i]++;
                currentConcrete +=195;
            }


        }
        days--;
        concretePerDay.push(currentConcrete);


    }

    console.log(concretePerDay.join(", "));
    let pesos = concretePerDay.reduce((a, b) => a + b) * 1900;
    console.log(`${pesos} pesos`);

}


solve(['17']);