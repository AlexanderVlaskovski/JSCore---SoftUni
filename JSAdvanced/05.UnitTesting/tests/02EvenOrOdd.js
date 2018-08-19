const expect = require('chai').expect;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe ("Even or Odd function", function () {
    it('Should return even for "hi"', function () {
        let test = 'hi';
        let result = isOddOrEven(test);
        expect(result).to.be.equal("even");

    })

    it('Should return odd for "h"', function () {
        let test = 'h';
        let result = isOddOrEven(test);
        expect(result).to.be.equal("odd");

    })

    it('Should return undefined for ""', function () {
        let test;
        let result = isOddOrEven(test);
        expect(result).to.be.equal(undefined);

    })
});
    
