function sumDiagonals(input) {
    let matrix = input.map(row => row.split(" ").map(e => Number(e)));

    let sumOne = 0;
    let sumTwo = 0;

    for (let row = 0; row < matrix.length; row++) {
        sumOne += matrix[row][row];
        sumTwo += matrix[row][matrix.length - 1 - row];
    }

    if (sumOne === sumTwo) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (col != row && col != matrix.length - 1 - row) {
                    matrix[row][col] = sumOne;
                    continue;
                }
            }
        }
    }
    console.log(matrix.map(row => row.join(" ")).join("\n"));
}
