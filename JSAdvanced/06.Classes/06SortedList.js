class Collection {
    constructor() {
        this.internalArr = [];
        this.size = 0;

    }

    add(element) {
        this.internalArr.push(element);
        this.size++;
        this.sort();
    };

    remove(index) {
        if (index >= 0 && index < this.internalArr.length) {
            this.internalArr.splice(index, 1);
            this.size--;
        }
    };

    get(index) {
        if (index >= 0 && index < this.internalArr.length) {
            return this.internalArr[index];
        }
    };

    toString() {
        return this.internalArr.join(' ');
    };

    sort() {
        this.internalArr = this.internalArr.sort((a, b) => a - b);
    }
}

