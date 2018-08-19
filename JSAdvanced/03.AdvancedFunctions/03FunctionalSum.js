
    let f = (function () {
        let total = 0;

        return function sum(a) {
            total += a;
            sum.toString = () => total;
            return sum;
        }

    })();
    console.log(Number(f(4)(5)(3)));


