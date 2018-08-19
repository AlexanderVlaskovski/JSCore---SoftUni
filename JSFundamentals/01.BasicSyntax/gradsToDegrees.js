function convertGrads(grads){
    let gradsModulo = grads % 400;
    let gradsToConvert;
    if(gradsModulo < 0){
        gradsToConvert = gradsModulo + 400;
    }
    else {
        gradsToConvert = gradsModulo;
    }

    let degrees = gradsToConvert * 0.9;
    console.log(degrees);

}

convertGrads(400);