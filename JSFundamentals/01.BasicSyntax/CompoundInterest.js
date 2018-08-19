function compoundInterest(data) {
    let result = data[0]* Math.pow(1+data[1]/(100*(12/data[2])), 12/data[2]*data[3]);
    console.log(result);
}

compoundInterest([100000, 5, 12, 25]);