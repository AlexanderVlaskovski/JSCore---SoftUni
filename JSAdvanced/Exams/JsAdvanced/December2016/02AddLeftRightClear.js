let expect = require('chai').expect;

function makeList() {
    let data = [];
    return {
        addLeft: function (item) {
            data.unshift(item);
        },
        addRight: function (item) {
            data.push(item);
        },
        clear: function () {
            data = [];
        },
        toString: function () {
            return data.join(", ");
        }
    };
}

describe('check functionality', function () {
    let myList = {};

    beforeEach(function () {
        myList = makeList();
    });

    it('should be initialized correctly', function () {
        expect(myList.hasOwnProperty('addLeft')).to.be.equal(true);
        expect(myList.hasOwnProperty('addRight')).to.be.equal(true);
        expect(myList.hasOwnProperty('clear')).to.be.equal(true);
        expect(myList.hasOwnProperty('toString')).to.be.equal(true);

    })
    describe('addLeft functionality', function () {
        it('should add any item', function () {
            myList.addLeft(1);
            myList.addLeft('1');
            myList.addLeft({});
            myList.addLeft('');
            myList.addLeft(-1);
            myList.addLeft(1.5);

            expect(myList.toString()).to.be.equal('1.5, -1, , [object Object], 1, 1')


        })
    })
    describe('addRight functionality', function () {
        it('should add any item', function () {
            myList.addRight(1);
            myList.addRight('1');
            myList.addRight({});
            myList.addRight('');
            myList.addRight(-1);
            myList.addRight(1.5);

            expect(myList.toString()).to.be.equal('1, 1, [object Object], , -1, 1.5')
            myList.clear();
            expect(myList.toString()).to.be.equal('')

        })
    })
    // describe('mixed functionality', function () {
    //     it('should add any item')
    //
    // })

})


