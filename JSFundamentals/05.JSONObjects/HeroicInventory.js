function solve(input) {
        let toPrint = [];
    for (let str of input) {

        let tokens = str.split(/\s*\/\s*/).filter(a=>a!== "");
        let item = tokens[2] === undefined ? [] : tokens[2].split(", ");
        let heroicIntentory = {
            name: tokens[0],
            level: Number(tokens[1]),
            items: item
        };


        toPrint.push(heroicIntentory);

    }
    console.log(JSON.stringify(toPrint));
}
solve(["Isacc / 25 / Apple, GravityGun",
"Derek / 12 / BarrelVest, DestructionSword",
"Hes / 1 / "]);