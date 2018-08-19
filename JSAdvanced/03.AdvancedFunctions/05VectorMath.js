(function () {

    return {

        'add': (arr1, arr2) => {
            return result = [arr1[0] + arr2[0], arr1[1] + arr2[1]];
        },

        'multiply': (arr1, scalar) => {
            return [arr1[0] * scalar, arr1[1] * scalar];
        },

        'length': (arr) => {
            return Math.sqrt((arr[0]) * (arr[0]) + (arr[1]) * (arr[1]))

        },
        'dot': (arr1, arr2) => {
            return (arr1[0]) * (arr2[0]) + (arr1[1]) * (arr2[1])
        },
        'cross': (arr1, arr2) => {
            return arr1[0] * arr2[1] - arr1[1] * arr2[0]
        }

    }

}());