let expect = require('chai').expect;

class Sumator {
    constructor() {
        this.data = [];
    }

    add(item) {
        this.data.push(item);
    }

    sumNums() {
        let sum = 0;
        for (let item of this.data)
            if (typeof (item) === 'number')
                sum += item;
        return sum;
    }

    removeByFilter(filterFunc) {
        this.data = this.data.filter(x => !filterFunc(x));
    }

    toString() {
        if (this.data.length > 0)
            return this.data.join(", ");
        else
            return '(empty)';
    }
}

describe('check functionality', function () {
    it('should have empty array', function () {
        let initEmpty = () => obj = new Sumator();
        expect(initEmpty).to.not.throw();
    })
    describe('check add function', function () {
        beforeEach(function () {
            let obj = new Sumator();
        })
        describe('check add function with a number', function () {
            it('should add number', function () {

                obj.add(5);
                expect(obj.data.length).to.be.equal(1);

            });
        })
        describe('check add function with a string', function () {
            it('should add string', function () {
                obj.add('bla');
                expect(obj.data.length).to.be.equal(2);
            })
        })
        describe('check add function with object', function () {
            it('should add object', function () {
                let testObj = {};
                obj.add(testObj);
                expect(obj.data.length).to.be.equal(3);

            })
        })
    })
    describe('Check sums function', function () {

        describe('check with empty object', function () {
            it('should return zero', function () {
                let testObject = new Sumator();
                let result = testObject.sumNums();
                expect(result).to.be.equal(0);
            })
        });
        describe('check with only numbers object', function () {
            it('should return zero', function () {
                let testObject = new Sumator();
                testObject.add(1);
                testObject.add(2);

                let result = testObject.sumNums();
                expect(result).to.be.equal(3);
            })
        });
        describe('check with not only numbers object', function () {
            it('should return zero', function () {
                let testObject = new Sumator();
                testObject.add(1);
                testObject.add('blabla');

                testObject.add(2);

                let result = testObject.sumNums();
                expect(result).to.be.equal(3);
            })
        });
        describe('check with not only numbers object', function () {
            it('should return zero', function () {
                let testObject = new Sumator();
                testObject.add(-1);
                testObject.add('blabla');

                testObject.add(2.5);

                let result = testObject.sumNums();
                expect(result).to.be.equal(1.5);
            })
        });
    })
    describe('check filter function', function () {
        describe('filter with only one element', function () {
            it('should return empty arr', function () {
                let filterObj = new Sumator();
                filterObj.add(5);
                filterObj.removeByFilter((a) => a < 6);
                expect(filterObj.data.length).to.be.equal(0);
            })
        });
    })
    describe('check toString function', function () {
        describe('with empty string', function () {
            it('should return empty with no data', function () {
                let stringObj = new Sumator();
                let result = stringObj.toString();
                expect(result).to.be.equal('(empty)');
            })

        })
        describe('with  some data', function () {
            it('should return the right format with some data', function () {
                let stringObj = new Sumator();
                stringObj.add(5);
                stringObj.add('blabla');
                let result = stringObj.toString();
                expect(result).to.be.equal('5, blabla');
            })

        })
    })
});


