function solve(input) {
    let area = input[1];
    let speed = input[0];

    function getLimit(area) {
        switch (area) {
            case 'motorway':
                return 130;
            case 'interstate':
                return 90;
            case 'city':
                return 50;
            case  'residential':
                return 20;
        }
    }

    function difference(area, speed) {
        let limit = getLimit(area);
        if (limit < speed) {
            return speed - limit;
        }
        else return 0;
    }

    let diff = difference(area, speed);
    if (diff !== 0) {
        if (diff <= 20) {
            console.log('speeding');
        }
        else if (diff <= 40) {
            console.log('excessive speeding');

        }
        else {
            console.log('reckless driving');

        }
    }

}

solve([200, 'motorway']);