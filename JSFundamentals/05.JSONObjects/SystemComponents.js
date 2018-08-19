function components(input) {

    let components = new Map();

    for (let str of input) {

        let [system, currentComponent, subComponent] = str.split(" | ").filter(a => a !== "");

        if (!components.has(system)) {
            components.set(system, new Map());
        }
        if(!components.get(system).has(currentComponent)){
            components.get(system).set(currentComponent, []);
        }
        components.get(system).get(currentComponent).push(subComponent);

    }
    let sortSystemMap = [...components.keys()].sort((a, b) => sortSystems(a, b)); //Array.from(components.keys()).sort((a, b) => sortSystems(a, b));
    for (let system of sortSystemMap) {
        console.log(system);

        let sortComponentMap = [...components.get(system).keys()].sort((a, b) => sortComponents(system, a, b));
        for (let component of sortComponentMap) {
            console.log(`|||${component}`);
            components.get(system).get(component).forEach(e => console.log(`||||||${e}`))
        }
    }
    function sortSystems(a, b) {
        if (components.get(a).size !== components.get(b).size) {
            return components.get(b).size - components.get(a).size;
        } else {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        }
    }
    function sortComponents(system, a, b) {
        return components.get(system).get(b).length - components.get(system).get(a).length;
    }

}

components(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']);