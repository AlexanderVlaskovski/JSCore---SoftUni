function biggestNumber([first, second, third]){
    let biggest = first;
    if(first < second){
        biggest = second;
    }
    else if(first < third){
        biggest = third;
    }
    console.log(biggest);
}
biggestNumber([-5, -2, -7]);