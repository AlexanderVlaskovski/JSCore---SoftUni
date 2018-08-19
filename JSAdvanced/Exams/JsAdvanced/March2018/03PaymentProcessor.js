class PaymentProcessor {
    constructor(obj = {
                    types: ["service", "product", "other"],
                    precision: 2
                }
    ) {
        this.options = obj;
        this.validPayments = [];
        this.obj = obj;
    }


    set obj(value) {
        if(!value.hasOwnProperty('types')){
            value.types = ["service", "product", "other"];
        }
        if(!value.hasOwnProperty('precision')){
            value.precision = 2;
        }
        return this._obj = value;
    }

    get obj(){
        return this._obj;
    }

    registerPayment(id, name, type, value) {
        if ((id === '' || typeof id !== "string") || (name === '' || typeof name !== 'string')) {
            throw new Error("Must be non-empty string!")
        }
        if (!this.options.types.includes(type)) {
            throw new Error("Invalid type!")
        }
        if (typeof  value !== "number") {
            throw new Error('Must be number!')
        }
        if (this.validPayments.map(a => a.id === id).includes(true)) {

            throw new Error("Invalid ID!")

        }

        let currentPayment = {
            id: id,
            name: name,
            type: type,
            value: value
        };
        this.validPayments.push(currentPayment);
    }

    deletePayment(id) {
        if (!this.validPayments.map(a => a.id === id).includes(true)) {
            throw new Error("Id not found!")
        }
        this.validPayments = this.validPayments.filter(a=>a.id !== id);
    }

    get(id){
        if (!this.validPayments.map(a => a.id === id).includes(true)) {
            throw new Error("Id not found!")
        }
        let currObj = this.validPayments.filter(a=>a.id===id)[0];
        let precision = this.options.precision;
        return `Details about payment ID: ${currObj.id}\n- Name: ${currObj.name}\n- Type: ${currObj.type}\n- Value: ${currObj.value.toFixed(precision)}`;
    }

    setOptions(options){
        if(options.hasOwnProperty('types')){
            this.options.types = options.types;
        }
        if(options.hasOwnProperty('precision')){
            this.options.precision = precision;
        }
    }

    toString(){
        let payemnts = 0;
        for (let payment of this.validPayments) {
            payemnts+= payment.value;
        }
        let precision = this.options.precision;

        return `Summary:\n- Payments: ${this.validPayments.length}\n- Balance: ${payemnts.toFixed(precision)}`

    }

}

const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
//console.log(generalPayments.toString());
//
// generalPayments.setOptions({types: ['product', 'material']});
// generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
// console.log(generalPayments.get('E028'));
generalPayments.setOptions({types: ['product', 'material']});
generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
//console.log(generalPayments.get('E028'));
generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);
generalPayments.deletePayment('E028');
//console.log(generalPayments.toString());
const servicePyaments = new PaymentProcessor({types: ['service']});
servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
console.log(servicePyaments.toString());
const transactionLog = new PaymentProcessor({precision: 5});
transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
console.log(transactionLog.toString());


