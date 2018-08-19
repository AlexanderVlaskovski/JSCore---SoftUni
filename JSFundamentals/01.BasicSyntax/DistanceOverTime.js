function distance(data){
    let distance = Math.abs(data[0]/3.6 * data[2] - data[1]/3.6 * data[2]);
    console.log(distance)

}

distance([11, 10, 120]);
