class Repository {
    constructor(obj) {
        this.props = obj;
        this.data = new Map();
        this.id = 0;
        this.validate = function(obj, entity) {
            let objKeys = Object.keys(obj);

            for(let i =0; i<objKeys.length; i++){
                if(!entity.hasOwnProperty(objKeys[i])){
                    throw new Error(`Property ${objKeys[i]} is missing from the entity!`)
                }
                else{
                    if(!(typeof entity[objKeys[i]] === obj[objKeys[i]])){
                        throw new TypeError(`Property ${objKeys[i]} is of incorrect type!`)
                    }
                }
            }

            return true;
        }
    }

    add(entity) {
        if(this.validate(this.props, entity)){
        this.data.set(this.id, entity);
        this.id++;
        }
        return this.id - 1;
    }

    get(id){
        if(!this.data.has(id)){
            throw new Error(`Entity with id: ${id} does not exist!`);
        }
       return this.data.get(id);
    }

    update(id, newEntity){
        if(!this.data.has(id)){
            throw new Error(`Entity with id: ${id} does not exist!`);
        }

       if(this.validate(this.props, newEntity)){
            this.data.set(id, newEntity);
       }

    }
    del(id){
        if(!this.data.has(id)){
            throw new Error(`Entity with id: ${id} does not exist!`);
        }
        this.data.delete(id);
    }

    get count(){
        return [...this.data.keys()].length;
    }


}



let properties = {
    name: "string",
    age: "number",
    birthday: "object"
};
//Initialize the repository
let repository = new Repository(properties);
// Add two entities
let entity = {
    name: "Kiril",
    age: 19,
    birthday: new Date(1998, 0, 7)
};
repository.add(entity); // Returns 0
repository.add(entity); // Returns 1
console.log(repository.get(0));
// {"name":"Kiril","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
console.log(repository.get(1));
// {"name":"Kiril","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
//Update an entity
entity = {
    name: 'Valio',
    age: 19,
    birthday: new Date(1998, 0, 7)
};
repository.update(1, entity);
console.log(repository.get(1));
// {"name":"Valio","age":19,"birthday":"1998-01-06T22:00:00.000Z"}
// Delete an entity
repository.del(0);
console.log(repository.count); // Returns 1
let anotherEntity = {
    name1: 'Nakov',
    age: 26,
    birthday: new Date(1991, 0, 21)
};
//repository.add(anotherEntity); // should throw an Error
anotherEntity = {
    name: 'Nakov',
    age: 26,
    birthday: 1991
};
//repository.add(anotherEntity); // should throw a TypeError
//repository.del(-1); // should throw Error for invalid id