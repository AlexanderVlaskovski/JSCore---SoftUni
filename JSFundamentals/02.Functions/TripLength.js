function solve(input) {
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];
    let x3 = input[4];
    let y3 = input[5];

    function calcDistance(a, b, c, d) {
        return Math.sqrt(Math.pow((a - c), 2)+Math.pow((b-d), 2));
    }
    let distanceOne = calcDistance(x1,y1, x2, y2);
    let distanceTwo = calcDistance(x2,y2, x3, y3);
    let distanceThree = calcDistance(x1, y1, x3, y3);

    if ((distanceOne <= distanceThree) && (distanceThree >= distanceTwo)) {
        let a = distanceOne + distanceTwo;
        console.log('1->2->3: ' + a);
    }
    else if ((distanceOne <= distanceTwo) && (distanceThree < distanceTwo)) {
        let b = distanceThree + distanceOne;
        console.log('2->1->3: '+ b);
    }
    else {
        let c = distanceTwo + distanceThree;
        console.log('1->3->2: ' + c);
    }


}