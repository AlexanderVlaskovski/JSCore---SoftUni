function solve(input) {

    let rotations = Number(input[input.length-1]);
    input.pop();
    rotations %= input.length;

    for (var i = 0; i < rotations; i++) {
        let el = input.pop();
        input.unshift(el);
    }

    console.log(input.join(" "));
}

solve(["1", "2", "3", "4", "2"]);