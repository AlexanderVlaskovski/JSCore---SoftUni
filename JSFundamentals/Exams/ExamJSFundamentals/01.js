function solve(input){

    let customersClumsy = 0;
    let customersSpec = 0;
    let goldEarned = 0;

    for (let work of input) {
        let tokens = work.split(" : ").filter(e=>e!=="");
        let currentWork = tokens[0];
        let amountOfGold = Number(tokens[1]);

        if(currentWork === 'Programming' || currentWork === 'Hardware maintenance' || currentWork === 'Cooking' || currentWork === 'Translating' || currentWork === 'Designing'){
            if(amountOfGold>=200){
            customersSpec++;
                let currentGold = amountOfGold - 0.2 * amountOfGold;
                if(customersSpec % 2 === 0){
                    currentGold+= 200;
                }
                goldEarned += currentGold;
            }

        }
        else if(currentWork === 'Driving' || currentWork === 'Managing' || currentWork === 'Fishing' || currentWork === 'Gardening'){
            goldEarned+=amountOfGold;
        }
        else if(currentWork === 'Singing' || currentWork === 'Accounting' || currentWork === 'Teaching' || currentWork === 'Exam-Making' || currentWork === 'Acting' || currentWork === 'Writing' || currentWork === 'Lecturing' || currentWork === 'Modeling' || currentWork === 'Nursing'){
            customersClumsy++;
            let currentGold = amountOfGold;
            if(customersClumsy % 2 === 0){
                 currentGold -= 0.05 * amountOfGold;
            }
            else if(customersClumsy % 3 === 0){
                currentGold -= 0.1 * amountOfGold;
            }
            goldEarned += currentGold;
        }
    }
    console.log(`Final sum: ${goldEarned.toFixed(2)}`)

    if(goldEarned >= 1000){
        let goldLeft = goldEarned - 1000;
        console.log(`Mariyka earned ${goldLeft.toFixed(2)} gold more.`)
    }
    else{
        let goldNeed = 1000 - goldEarned;
        console.log(`Mariyka need to earn ${goldNeed.toFixed(2)} gold more to continue in the next task.`);

    }

}


solve(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199", "Hardware maintenance : 800", "Gardening : 700", "Programming : 500"]);