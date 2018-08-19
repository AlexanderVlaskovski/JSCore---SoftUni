function sortArray(inputArray, sortMethod){

    let ascending = function (a,b) {
        return a-b;

    };

    let descending = function (a,b) {
        return b-a;

    };

    let sorting = {
        'asc': ascending,
        'desc': descending
    };

    return inputArray.sort(sorting[sortMethod]);
}

sortArray([14, 7, 17, 6, 8], 'asc')