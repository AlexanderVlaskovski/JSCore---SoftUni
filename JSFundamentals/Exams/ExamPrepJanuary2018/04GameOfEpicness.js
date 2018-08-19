function solve(inputObj, inputMatrix) {

    let kingdoms = {};
    for (let obj of inputObj) {

        let currentKingdom = obj.kingdom;
        let currentGeneral = obj.general;
        let currentArmy = obj.army;

        if (!kingdoms.hasOwnProperty(currentKingdom)) {
            kingdoms[currentKingdom] = {};
            kingdoms[currentKingdom][currentGeneral] = {};
            kin  gdoms[currentKingdom][currentGeneral]['army'] = currentArmy;
            kingdoms[currentKingdom][currentGeneral]['wins'] = 0;
            kingdoms[currentKingdom][currentGeneral]['loses'] = 0;
        }
        else if (!kingdoms[currentKingdom].hasOwnProperty(currentGeneral)) {
            kingdoms[currentKingdom][currentGeneral] = {};
            kingdoms[currentKingdom][currentGeneral]['army'] = currentArmy;
            kingdoms[currentKingdom][currentGeneral]['wins'] = 0;
            kingdoms[currentKingdom][currentGeneral]['loses'] = 0;

        }
        else {
            kingdoms[currentKingdom][currentGeneral]['army'] += currentArmy;
        }

    }
    let kingdomsWins = {};

    for (let battle of inputMatrix) {

        let attackingKingdom = battle[0];
        let attackingGeneral = battle[1];
        let defendingKingdom = battle[2];
        let defendingGeneral = battle[3];

        if (!kingdomsWins.hasOwnProperty(attackingKingdom)) {
            kingdomsWins[attackingKingdom] = {};
            kingdomsWins[attackingKingdom]['wins'] = 0;
            kingdomsWins[attackingKingdom]['loses'] = 0;
        }

        if (!kingdomsWins.hasOwnProperty(defendingKingdom)) {
            kingdomsWins[defendingKingdom] = {};
            kingdomsWins[defendingKingdom]['wins'] = 0;
            kingdomsWins[defendingKingdom]['loses'] = 0;
        }

        if (attackingKingdom !== defendingKingdom) {
            if (kingdoms[attackingKingdom][attackingGeneral]['army'] > kingdoms[defendingKingdom][defendingGeneral]['army']) {

                kingdoms[attackingKingdom][attackingGeneral]['army'] = Math.floor(0.1 * kingdoms[attackingKingdom][attackingGeneral]['army'] + kingdoms[attackingKingdom][attackingGeneral]['army']);
                kingdoms[attackingKingdom][attackingGeneral]['wins'] += 1;
                kingdomsWins[attackingKingdom]['wins']++;
                kingdoms[defendingKingdom][defendingGeneral]['army'] = Math.floor(kingdoms[defendingKingdom][defendingGeneral]['army'] - 0.1 * kingdoms[defendingKingdom][defendingGeneral]['army']);
                kingdoms[defendingKingdom][defendingGeneral]['loses'] += 1;
                kingdomsWins[defendingKingdom]['loses']++;

            }
            else if (kingdoms[attackingKingdom][attackingGeneral]['army'] < kingdoms[defendingKingdom][defendingGeneral]['army']) {
                kingdoms[attackingKingdom][attackingGeneral]['army'] = Math.floor(kingdoms[attackingKingdom][attackingGeneral]['army'] - kingdoms[attackingKingdom][attackingGeneral]['army'] * 0.1);
                kingdoms[attackingKingdom][attackingGeneral]['loses'] += 1;
                kingdomsWins[attackingKingdom]['loses']++;

                kingdoms[defendingKingdom][defendingGeneral]['army'] = Math.floor(kingdoms[defendingKingdom][defendingGeneral]['army'] + 0.1 * kingdoms[defendingKingdom][defendingGeneral]['army']);
                kingdoms[defendingKingdom][defendingGeneral]['wins'] += 1;
                kingdomsWins[defendingKingdom]['wins']++;


            }

        }

    }
    let sortedKingdoms = Object.keys(kingdomsWins).sort((a, b) => {
        let diff = kingdomsWins[b]['wins'] - kingdomsWins[a]['wins'];
        if (diff === 0) {
            let secondDiff = kingdomsWins[a]['loses'] - kingdomsWins[b]['loses'];
            if (secondDiff === 0) {
                return (a).localeCompare(b);
            }
            else {
                return secondDiff;
            }
        }
        else {
            return diff;
        }
    });

        let winner = sortedKingdoms[0];

        let sortedGenerals = Object.keys(kingdoms[winner]).sort((a,b) => {
            return kingdoms[winner][b]['army'] - kingdoms[winner][a]['army'];
        });
    console.log("Winner: "+winner);
    for (let name of sortedGenerals) {

        console.log(`/\\general: ${name}\n---army: ${kingdoms[winner][name]['army']}\n---wins: ${kingdoms[winner][name]['wins']}\n---losses: ${kingdoms[winner][name]['loses']}`);

    }

}


solve([{kingdom: "Maiden Way", general: "Merek", army: 5000},
        {kingdom: "Stonegate", general: "Ulric", army: 4900},
        {kingdom: "Stonegate", general: "Doran", army: 70000},
        {kingdom: "YorkenShire", general: "Quinn", army: 0},
        {kingdom: "YorkenShire", general: "Quinn", army: 2000},
        {kingdom: "Maiden Way", general: "Berinon", army: 100000}],
    [["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"]]);