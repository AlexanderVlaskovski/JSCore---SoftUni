class Melon {
    constructor(weight, melonSort) {
        if (new.target === Melon) {
            throw new TypeError("Abstract class cannot be instantiated directly");
        }
        this.weight = Number(weight);
        this.melonSort = melonSort;

    }

    get elementIndex() {
        return this.melonSort.length * this.weight;
    }

    toString() {
        return `Element: ${this.constructor.name.slice(0, -5)}\n` + `Sort: ${this.melonSort}\n` + `Element Index: ${this.elementIndex}`;
    }
}

class Watermelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }
}

class Earthmelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }
}

class Firemelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }
}

class Airmelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }
}

class Melolemonmelon extends Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.element = 'Water';
        this._elements = [
            'Fire',
            'Earth',
            'Air',
            'Water'
        ]
    }

    morph() {
        let elementToChange = this._elements.shift();
        this.element = elementToChange;
        this._elements.push(elementToChange);
    }

    toString() {
        return `Element: ${this.element}\n` + `Sort: ${this.melonSort}\n` + `Element Index: ${this.elementIndex}`;
    }
}
let k = new Melon(5, "sasa");
console.log(k.toString());