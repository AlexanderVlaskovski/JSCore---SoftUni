function solve(matrix, commands) {

    let map = [];

    for (let el of matrix) {

        let toFill = el.split(" ").filter(e => e !== "").map(e => Number(e));
        map.push(toFill);

    }
    for (let command of commands) {

        let tokens = command.split(" ").filter(e => e !== "");
        let currentCommand = tokens[0];
        let amount = Number(tokens[1]);

        switch (currentCommand) {

            case 'breeze':
                for (let i = 0; i < map[amount].length; i++) {
                    if (map[amount][i] <= 15) {
                        map[amount][i] = 0;
                    }
                    else {
                        map[amount][i] -= 15;
                    }

                }
                break;
            case 'gale':
                for (let i = 0; i < map.length; i++) {
                    if (map[i][amount] <= 20) {
                        map[i][amount] = 0;
                    }
                    else {
                        map[i][amount] -= 20;
                    }

                }
                break;
            case 'smog':
                for (let i = 0; i < map.length; i++) {
                    for (let j = 0; j < map[i].length; j++) {
                        map[i][j] += amount;

                    }
                }
                break;

        }

    }
    let pollutedIndexes = [];
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] >= 50) {
                pollutedIndexes.push(`[${i}-${j}]`);
            }
        }
    }
    if(pollutedIndexes.length !== 0) {
        console.log("Polluted areas: " + pollutedIndexes.join(", "));
    }
    else{
        console.log("No polluted areas");
    }
}

solve( ["5 7 2 14 4",
    "21 14 2 5 3",
    "3 16 7 42 12",
    "2 20 8 39 14",
    "7 34 1 10 24",
],
["breeze 1", "gale 2", "smog 35"]);