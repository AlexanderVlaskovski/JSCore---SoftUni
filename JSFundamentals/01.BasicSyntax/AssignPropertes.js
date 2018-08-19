function toAssign(input){
        let obj = {};

        for (let i = 0; i < input.length-1; i+=2) {

                obj[input[i]] = input[i+1];

        }
        console.log(obj);
    }
toAssign(['name', 'Pesho', 'age', '23', 'gender', 'male']);