let expect = require('chai').expect;

class Calculator {
    constructor() {
        this.expenses = [];
    }

    add(data) {
        this.expenses.push(data);
    }

    divideNums() {
        let divide;
        for (let i = 0; i < this.expenses.length; i++) {
            if (typeof (this.expenses[i]) === 'number') {
                if (i === 0 || divide===undefined) {
                    divide = this.expenses[i];
                } else {
                    if (this.expenses[i] === 0) {
                        return 'Cannot divide by zero';
                    }
                    divide /= this.expenses[i];
                }
            }
        }
        if (divide !== undefined) {
            this.expenses = [divide];
            return divide;
        } else {
            throw new Error('There are no numbers in the array!')
        }
    }

    toString() {
        if (this.expenses.length > 0)
            return this.expenses.join(" -> ");
        else return 'empty array';
    }

    orderBy() {
        if (this.expenses.length > 0) {
            let isNumber = true;
            for (let data of this.expenses) {
                if (typeof data !== 'number')
                    isNumber = false;
            }
            if (isNumber) {
                return this.expenses.sort((a, b) => a - b).join(', ');
            }
            else {
                return this.expenses.sort().join(', ');
            }
        }
        else return 'empty';
    }
}

describe('functionality of class Calculator', function () {
    let currCalc;
    beforeEach(function () {
        currCalc = new Calculator();
    });
    describe('initialization', function () {
        it('should have property expenses upon initialization', function () {
            expect(currCalc.hasOwnProperty('expenses')).to.be.equal(true);
            expect(currCalc['expenses'].toString()).to.be.equal('')

        })
    });
    describe('add functionality', function () {
        it('should add any type of data', function () {
            currCalc.add(1);
            currCalc.add('2');
            currCalc.add({});
            currCalc.add('');
            currCalc.add(-1);
            currCalc.add(1.5);

            expect(currCalc.toString()).to.be.equal('1 -> 2 -> [object Object] ->  -> -1 -> 1.5')
        })
    })
    describe('divide functionality', function () {
        it('should throw error without numbers', function () {
            currCalc.add('2');
            currCalc.add('3');
            let err = () => currCalc.divideNums();
            expect(err).to.throw();
        })
        it('should work properly with positive numbers', function () {
            currCalc.add(4);
            currCalc.add(2);
            expect(currCalc.divideNums()).to.be.equal(2);
        })
        it('should work properly with negative numbers', function () {
            currCalc.add(-4);
            currCalc.add(-2);
            expect(currCalc.divideNums()).to.be.equal(2);
        })
        it('should work properly with floating  numbers', function () {
            currCalc.add(0.1);
            currCalc.add(10);
            expect(currCalc.divideNums()).to.be.equal(0.01);
        })
        it('should work properly with floating  numbers', function () {
            currCalc.add(0.1);
            currCalc.add(100000);
            expect(currCalc.divideNums()).to.be.closeTo(0.000001, 0.01);
        })

        it('should divide only numbers', function () {
            currCalc.add(4);
            currCalc.add('2');
            currCalc.add(2);
            expect(currCalc.divideNums()).to.be.equal(2);
        })
        it('should return cannot divide by zero if there is a zero in the expenses', function () {
            currCalc.add(4);
            currCalc.add(0);
            let cannot = () => currCalc.divideNums();
            expect(cannot()).to.be.equal('Cannot divide by zero')
        })
    })
    describe('orderBy functionality', function () {
        it('should return sorted numbers with only numbers', function () {
            currCalc.add(3);
            currCalc.add(2);
            currCalc.add(1);
            expect(currCalc.orderBy()).to.be.equal('1, 2, 3')
        })
        it('with mixed data', function () {
            currCalc.add(1);
            currCalc.add(2);
            currCalc.add('Pesho')
            currCalc.add(3);
            expect(currCalc.orderBy()).to.be.equal('1, 2, 3, Pesho')
        })
        it('should return empty', function () {
            expect(currCalc.orderBy()).to.be.equal('empty');
            expect(currCalc.toString()).to.be.equal('empty array')
        })
    })

})