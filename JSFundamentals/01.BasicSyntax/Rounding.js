function round(data) {
    let precision = data[1];
    if (precision > 15)
    {
        precision = 15;
    }
   let roundedNumber =  parseFloat(data[0].toFixed(precision));
    console.log(roundedNumber);
}

round([10.5, 3]);