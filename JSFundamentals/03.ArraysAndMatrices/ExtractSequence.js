function solve(input) {
    console.log(input.filter((e, i) => e >= Math.max(...input.slice(0, i + 1))).join("\n"));

}
solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]);