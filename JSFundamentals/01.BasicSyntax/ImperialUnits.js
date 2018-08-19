function converter(inches){
    let second = inches%12;
    let first = (inches - second)/12;
    console.log(first+"'-"+second+"\"");
}
converter(36)