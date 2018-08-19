let expect = require('chai').expect;

class PaymentPackage {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.VAT = 20; // Default value
        this.active = true; // Default value
    }
    get name() {
        return this._name;
    }
    set name(newValue) {
        if (typeof newValue !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        if (newValue.length === 0) {
            throw new Error('Name must be a non-empty string');
        }
        this._name = newValue;
    }
    get value() {
        return this._value;
    }
    set value(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('Value must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('Value must be a non-negative number');
        }
        this._value = newValue;
    }
    get VAT() {
        return this._VAT;
    }
    set VAT(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('VAT must be a non-negative number');

        }
        if (newValue < 0) {
            throw new Error('VAT must be a non-negative number');
        }
        this._VAT = newValue;
    }
    get active() {
        return this._active;
    }
    set active(newValue) {
        if (typeof newValue !== 'boolean') {
            throw new Error('Active status must be a boolean');
        }
        this._active = newValue;
    }
    toString() {
        const output = [
            `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${this.value}`,
            `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
        ];
        return output.join('\n');
    }
}

describe('Test', () =>{
    describe('check initialization', ()=>{
        it('should be initalized with true parameters', ()=>{
            let currObj = new PaymentPackage('alex', 2);
            let name = currObj.name;
            expect(name).to.equal('alex');
            expect(currObj.value).to.equal(2);
            expect(currObj.VAT).to.equal(20);
            expect(currObj.active).to.equal(true)
        })
        it('should trow error with false parameters', ()=>{
            let result = () => { let currObj = new PaymentPackage(2, 1)};
            expect(result).to.throw();
        })
        it('should trow error with false parameters', ()=>{
            let result = () => { let currObj = new PaymentPackage('', 1)};
            expect(result).to.throw();
        })
        it('should trow error with false parameters', ()=>{
            let result = () => { let currObj = new PaymentPackage('bla', -1)};
            expect(result).to.throw();
        })
        it('should trow error with false parameters', ()=>{
            let result = () => { let currObj = new PaymentPackage('al', 'bla')};
            expect(result).to.throw();
        })
        it('should trow error with false parameters', ()=>{
            let currObj = new PaymentPackage('al', 2);
            let result = () => {currObj.VAT('123')};
            expect(result).to.throw();
        })
        it('should trow error with false parameters', ()=>{
            let currObj = new PaymentPackage('al', 2);
            let result = () => {currObj.VAT(-1)};
            expect(result).to.throw();
        })
        it('should trow error with false parameters', ()=>{
            let currObj = new PaymentPackage('al', 2);
            currObj.VAT = 2;
            expect(currObj.VAT).to.equal(2);
        })
        it('should trow error with false parameters', ()=>{
            let currObj = new PaymentPackage('al', 2);
            currObj.name = 'blabla';
            expect(currObj.name).to.equal('blabla');
        })
        it('should trow error with false parameters', ()=>{
            let currObj = new PaymentPackage('al', 2);
            let result = ()=>{currObj.active = '123'};
            expect(result).to.throw();
        })
        it('should trow error with false parameters', ()=>{
            let currObj = new PaymentPackage('al', 2);
            currObj.active = false;
            expect(currObj.active).to.equal(false);
        })
        it('should trow error with false parameters', ()=>{
            let currObj = new PaymentPackage('al', 1000);
            currObj.active = false;
            expect(currObj.toString()).to.equal(`Package: al (inactive)\n- Value (excl. VAT): 1000\n- Value (VAT 20%): 1200`);
        })
        it('should trow error with false parameters', ()=>{
            let currObj = new PaymentPackage('al', 1000);
            expect(currObj.toString()).to.equal(`Package: al\n- Value (excl. VAT): 1000\n- Value (VAT 20%): 1200`);
        })



    })
})
