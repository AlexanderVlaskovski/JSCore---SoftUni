function store(input) {

    let cars = new Map();

    for (let str of input) {

        let [name, model, quantity] = str.split(" | ").filter(a => a !== "");
        quantity = Number(quantity);

        if (!cars.has(name)) {
            cars.set(name, new Map());
        }
        if (!cars.get(name).has(model)) {
            cars.get(name).set(model, 0);
        }
        cars.get(name).set(model, cars.get(name).get(model) + quantity);
    }

    for (let [name, modelNumber] of cars) {

        console.log(name);

        for (let [model, number] of modelNumber) {

            console.log(`###${model} -> ${number}`);

        }

    }





}

store(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);