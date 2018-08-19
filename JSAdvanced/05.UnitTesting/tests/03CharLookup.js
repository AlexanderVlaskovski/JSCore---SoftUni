const expect = require('chai').expect;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe('Char Lookup Tests', function () {
    it('Should return "Incorrect index" for hello and 6', function () {
        let currentString = 'hello';
        let index = 6;
        let result = lookupChar(currentString, index);
        expect(result).to.be.equal("Incorrect index");
    });
    it('Should return "Incorrect index" for hello and -6', function () {
        let currentString = 'hello';
        let index = -6;
        let result = lookupChar(currentString, index);
        expect(result).to.be.equal("Incorrect index");
    });
    it('Should return 5 for "15" and 1', function () {
        let currentString = '15';
        let index = 1;
        let result = lookupChar(currentString, index);
        expect(result).to.be.equal("5")

    })
    it('Should return undefined for 15 and 1', function () {
        let currentString = 15;
        let index = 1;
        let result = lookupChar(currentString, index);
        expect(result).to.be.equal(undefined)

    })
    it('Should return undefined for "15" and "1"', function () {
        let currentString = '15';
        let index = "1";
        let result = lookupChar(currentString, index);
        expect(result).to.be.equal(undefined)

    })
    it('Should return "Incorrect index" for hello and 5', function () {
        let currentString = 'hello';
        let index = 5;
        let result = lookupChar(currentString, index);
        expect(result).to.be.equal("Incorrect index");
    })
    it('Should return undefined for 15 and "1"', function () {
        let currentString = '';
        let index;
        let result = lookupChar(currentString, index);
        expect(result).to.be.equal(undefined)
    })
    it('Should return undefined for "hello" and 1.5', function () {
        let currentString = 'hello';
        let index = 1.5;
        let result = lookupChar(currentString, index);
        expect(result).to.be.equal(undefined)
    })
})
