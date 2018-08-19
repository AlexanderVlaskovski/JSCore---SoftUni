function store(input) {
    let catalogue = {};
    for (let str of input) {
        let tokens = str.split(/\s*:\s*/).filter(el => el !== "");
        let alphabet = tokens[0].substr(0,1);
       if(catalogue.hasOwnProperty(alphabet)){
           catalogue[alphabet][tokens[0]] = tokens[1];
       }
       else{
           catalogue[alphabet] = {};
           catalogue[alphabet][tokens[0]] = tokens[1];
       }
    }
    let alphabets = Object.keys(catalogue).sort();
    for (let alphabet of alphabets) {
        let products = Object.keys(catalogue[alphabet]).sort();
        console.log(alphabet);
        for (let product of products) {
        console.log(`  ${product}: ${catalogue[alphabet][product]}`);
        }
    }


}

store(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);