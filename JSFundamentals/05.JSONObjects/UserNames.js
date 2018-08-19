function store(input) {
    let names = new Set();
    for (let name of input) {
        names.add(name);
    }

    console.log([...names].sort((a, b) => sort(a, b)).join("\n"));

    function sort(a, b) {
        if (a.length === b.length) {
            return a.localeCompare(b);
        }
        else {
            return a.length - b.length;
        }
    }

}

store(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']);