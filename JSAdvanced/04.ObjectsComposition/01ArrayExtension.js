(function () {

    Array.prototype.last = function () {
        return this.pop();

    };
    Array.prototype.skip = function (n) {
        return this.slice(n-1);
    };

    Array.prototype.take = function (n) {
        return this.slice(0, n);
    };
    Array.prototype.sum = function () {
        return this.reduce((a, b) => a + b);

    };
    Array.prototype.average = function () {
        return this.sum() / this.length;


    }


})();