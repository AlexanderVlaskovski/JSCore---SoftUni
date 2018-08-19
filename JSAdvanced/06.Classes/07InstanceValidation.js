class CheckingAccount{
    constructor(clientId, email, firstName, lastName){
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName= lastName;
    }


    set clientId(id){
        if(!/\b\d{6}\b/.test(id)){
            throw new TypeError("Client ID must be a 6-digit number");
        }
        this._clientId = id;
    }
    get clientId(){
        return this._clientId;
    }
    set email(m){
        if(!/[a-zA-Z0-9]+@[a-zA-Z.]+/.test(m)){
            throw new TypeError("Invalid e-mail")
        }
        this._email = m;
    }
    get email(){
        return this._email;
    }
    set firstName(f){
        if(!/.{3,20}/.test(f)){
            throw new TypeError("First name must be between 3 and 20 characters long")
        }
        else if(!/\b[a-zA-Z]+\b/.test(f)){
            throw new TypeError("First name must contain only Latin characters")
        }
       this._firstName = f;
    }

    get firstName(){
        return this._firstName
    }

    set lastName(l){
        if(!/.{3,20}/.test(l)){
            throw new TypeError("Last name must be between 3 and 20 characters long")
        }
        else if(!/\b[a-zA-Z]+\b/.test(l)){
            throw new TypeError("Last name must contain only Latin characters")
        }
        this._lastName = l;
    }

    get lastName(){
        return this._lastName
    }

}
//let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov')
//let acc = new CheckingAccount('123456', 'ivan@', 'Ivan', 'Petrov');
let acc = new CheckingAccount('1314555', 'ivan@some.com', 'I1van', 'P3TROV')