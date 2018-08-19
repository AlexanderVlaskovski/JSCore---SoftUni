function distance(data) {
    let distanceInThreeDimensions = Math.sqrt(Math.pow((data[0]-data[3]), 2) + Math.pow((data[1]-data[4]), 2) + Math.pow((data[2]-data[5]), 2));
    console.log(distanceInThreeDimensions);

}

distance([3.5, 0, 1, 0, 2, -1]);