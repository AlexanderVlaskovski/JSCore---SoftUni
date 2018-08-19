function solve(input){

    let travel = {};

    for (let currentDestination of input) {

        let tokens = currentDestination.split(" > ").filter(a=>a!== "");

        let country = tokens[0];
        let town = tokens[1];
        let price = Number(tokens[2]);
        let currentTown = [];
        for (let i = 1; i < town.length; i++) {
            currentTown[0] = town[0].toUpperCase();
            currentTown[i] = town[i];


        }
        let changedTown = currentTown.join("");

        if(!travel.hasOwnProperty(country)){
            travel[country] = {};
            travel[country][changedTown] = price;
        }
        else if(!travel[country].hasOwnProperty(changedTown)){
            travel[country][changedTown] = price;
        }
        else if(travel[country][changedTown] > price){
            travel[country][changedTown] = price;
        }


    }

    let sortedTravel = Object.keys(travel).sort((a, b)=>a.localeCompare(b));

    for (let currentCountry of sortedTravel) {

        let sortedTowns = Object.keys(travel[currentCountry]).sort((a,b)=>travel[currentCountry][a] - travel[currentCountry][b]);
        let result = `${currentCountry} ->`;
        for (let currentTown of sortedTowns) {
            result+= ` ${currentTown} -> ${travel[currentCountry][currentTown]}`;



        }
        console.log(result);
    }
}


solve(["Bulgaria > Sofia > 200",
    "Bulgaria > sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 300" ]
);