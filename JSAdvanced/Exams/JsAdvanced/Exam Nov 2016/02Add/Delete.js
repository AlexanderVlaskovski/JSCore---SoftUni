let expect = require('chai').expect;

let list = (function () {
    let data = [];
    return {
        add: function (item) {
            data.push(item);
        },
        delete: function (index) {
            if (Number.isInteger(index) && index >= 0 && index < data.length) {
                return data.splice(index, 1)[0];
            } else {
                return undefined;
            }
        },
        toString: function () {
            return data.join(", ");
        }
    };
})();
describe('Add/Delete in List', function () {
    describe('check if it is initialized correctly', function () {
        it('should initialize empty list when initialized', function () {
        expect(list.toString()).to.be.equal('');
        })
        it('should have add function', function () {
            expect(list.hasOwnProperty('add')).to.be.equal(true);
        })
        it('should have delete function', function () {
            expect(list.hasOwnProperty('delete')).to.be.equal(true);

        })
        it('should have toString function', function () {
            expect(list.hasOwnProperty('toString')).to.be.equal(true);

        })
    })
    describe('add functionality', function () {
        it('should add string', function () {
            list.add('test');
            expect(list.toString()).to.be.equal('test');
        })
        it('should add number', function () {
            list.add(100);
            expect(list.toString()).to.be.equal('test, 100');
        })
        it('should add several elements', function () {
            list.add('101');
            list.add(102);
            expect(list.toString()).to.be.equal('test, 100, 101, 102')
        })
    })
    describe('delete functionality', function () {
        it('should delete element with valid index', function () {
            expect(list.delete(0)).to.be.equal('test');
        })
        it('should delete element with last index', function () {
            expect(list.delete(2)).to.be.equal(102);
        })
        it('should delete element with valid index', function () {
            list.add(102);
            expect(list.delete(1)).to.be.equal('101');
        })
        it('should return undefined with negative index', function () {
            expect(list.delete(-1)).to.be.equal(undefined)
        })
        it('should return undefined with negative float index', function () {
            expect(list.delete(-1.5)).to.be.equal(undefined)
        })
        it('should return undefined with positve float index', function () {
            expect(list.delete(1.5)).to.be.equal(undefined)
        })
        it('should return undefined with index bigger than its length', function () {
            expect(list.delete(3)).to.be.equal(undefined)
        })
        it('should return undefined with index equal to its length', function () {
            expect(list.delete(2)).to.be.equal(undefined)
        })
        it('should return undefined with index which is NaN', function () {
            expect(list.delete('3')).to.be.equal(undefined)
        })

    })
    describe('toString functionality', function () {
        it('should return correct input', function () {
            expect(list.toString()).to.be.equal('100, 102')
        })
        it('should return correct input', function () {
            list.add('a')
            expect(list.toString()).to.be.equal('100, 102, a')
            list.delete(0);
            list.delete(0);
            list.delete(0);
        })
        it('should return empty string', function () {
            expect(list.toString()).to.be.equal('')
        })
    })

});
