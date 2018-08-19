function solve(input) {

    let landed = [];
    let townsData = {};
    for (let flight of input) {

        let [id, town, passengers, command] = flight.split(" ").filter(a=> a!== "");
            passengers = Number(passengers);
        if(command === "land"){

            if(!landed.includes(id)){

                landed.push(id);
                if(!townsData.hasOwnProperty(town)){
                    townsData[town] = {};
                    townsData[town]['id'] = new Set();
                    townsData[town]['id'].add(id);
                    townsData[town]['arrived'] = passengers;
                    townsData[town]['departured'] = 0;
                }
                else{
                    townsData[town]['id'].add(id);
                    townsData[town]['arrived']+=passengers;

                }

            }

        }
        else if(command === "depart"){

            if(landed.includes(id)){

                let index = landed.indexOf(id);
                landed.splice(index, 1);

                if(!townsData.hasOwnProperty(town)){
                    townsData[town] = {};
                    townsData[town]['id'] = new Set();
                    townsData[town]['id'].add(id);
                    townsData[town]['arrived'] = 0;
                    townsData[town]['departured'] = passengers;
                }
                else{
                    townsData[town]['id'].add(id);
                    townsData[town]['departured'] += passengers;
                }


            }
        }


    }
    landed = landed.sort((a, b) => a.localeCompare(b));
    console.log("Planes left:");
    for (let plane of landed) {
        console.log(`- ${plane}`)

    }

    let townNames = Object.keys(townsData).sort((name1, name2) => {
        if (townsData[name2]['arrived'] === townsData[name1]['arrived']){
            return name1.localeCompare(name2);
        }
        else{
            return townsData[name2]['arrived'] - townsData[name1]['arrived'];
        }

    });

    for (let currentTown of townNames) {

        console.log(currentTown);
        let currentPlanes = [...townsData[currentTown]['id']].sort((a,b) => a.localeCompare(b));
        console.log(`Arrivals: ${townsData[currentTown]['arrived']}`)
        console.log(`Departures: ${townsData[currentTown]['departured']}`);
        console.log("Planes:");

        for (let sortedPlane of currentPlanes) {
            console.log(`-- ${sortedPlane}`)

        }


    }


}

solve([
    'RTA72 London 140 land',
   'RTA72 Brussels 240 depart',
   'RTA72 Sofia 450 land',
   'RTA72 Lisbon 240 depart',
   'RTA72 Berlin 350 land',
   'RTA72 Otava 201 depart',
   'RTA72 Haga 350 land',
   'RTA72 Otava 201 depart',
   'RTA72 Dortmund 150 land',
   'RTA72 Montana 243 depart',
   'RTA72 Monreal 350 land',
   'RTA72 NewYork 201 depart',
   'RTA72 Pekin 350 land',
   'RTA72 Tokyo 201 depart',
   'RTA72 Warshaw 350 land',
   'RTA72 Riga 201 depart'
    ]);