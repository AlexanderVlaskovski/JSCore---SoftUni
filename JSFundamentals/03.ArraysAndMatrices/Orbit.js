function orbit(input) {

    let matrix = [];
    let length = input[0]
    for (var i = 0; i < length; i++) {
        matrix[i] = new Array(length);

    }
    let currRow = input[2];
    let currCol = input[3];

    for (var row = 0; row < length; row++) {
        for (var col = 0; col < length; col++) {
            matrix[row][col] = Math.max(Math.abs(row - currRow), Math.abs(col - currCol)) + 1;
        }
    }
    console.log(matrix);


}
orbit([4, 4, 0, 0]);