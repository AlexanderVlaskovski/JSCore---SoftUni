const expect = require('chai').expect;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe('Tests of mathEnforces functionality', function () {
    describe('tests of addFive function', function () {
        it('should return 5 for 0', function () {
            let num = 0;
            let result = mathEnforcer.addFive(num);
            expect(result).to.be.equal(5);

        })
        it('should return 6.5 for 1.5', function () {
            let num = 1.54;
            let result = mathEnforcer.addFive(num);
            expect(result).to.be.closeTo(6.54, 0.01);

        })
        it('should return -3 for -8', function () {
            let num = -8;
            let result = mathEnforcer.addFive(num);
            expect(result).to.be.equal(-3);

        })
        it('should return undefined for string', function () {
            let num = '123';
            let result = mathEnforcer.addFive(num);
            expect(result).to.be.equal(undefined);

        })
    });
    describe('Tests of subtractTen functionality', function () {
        it('should return undefined for string', function () {
            let num = '123';
            let result = mathEnforcer.subtractTen(num);
            expect(result).to.be.equal(undefined);

        })
        it('should return -3 for 7', function () {
            let num = 7;
            let result = mathEnforcer.subtractTen(num);
            expect(result).to.be.equal(-3);

        })
        it('should return -6.86 for 3.14', function () {
            let num = 3.14;
            let result = mathEnforcer.subtractTen(num);
            expect(result).to.be.closeTo(-6.86, 0.01);

        })
        it('should return -15 for -5', function () {
            let num = -5;
            let result = mathEnforcer.subtractTen(num);
            expect(result).to.be.equal(-15);


        })
    });
    describe("sum functionality", function () {
        it('should return 10 for 2 and 8', function () {
            let num1 = 2;
            let num2 = 8;
            let result = mathEnforcer.sum(num1, num2);
            expect(result).to.be.equal(10);

        })
        it('should return 10 for 2.5 and 7.5', function () {
            let num1 = 2.5;
            let num2 = 7.5;
            let result = mathEnforcer.sum(num1, num2);
            expect(result).to.be.equal(10);

        })
        it('should return -5 for -2.5 and -2.5', function () {
            let num1 = -2.5;
            let num2 = -2.5;
            let result = mathEnforcer.sum(num1, num2);
            expect(result).to.be.equal(-5);

        })

        it('should return undefined for -2.5 and "-2.5"', function () {
            let num1 = -2.5;
            let num2 = "-2.5";
            let result = mathEnforcer.sum(num1, num2);
            expect(result).to.be.equal(undefined);

        })
        it('should return undefined for -2.5 and "-2.5"', function () {
            let num1 = "-2.5";
            let num2 = -2.5;
            let result = mathEnforcer.sum(num1, num2);
            expect(result).to.be.equal(undefined);

        })
        it('should return undefined for "-2.5" and "-2.5"', function () {
            let num1 = 0;
            let num2 = 0;
            let result = mathEnforcer.sum(num1, num2);
            expect(result).to.be.equal(0);

        })


    })
});
