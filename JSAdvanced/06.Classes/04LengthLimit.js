class Stringer{
    constructor(text, length){
        this.innerString = text;
        this.innerLength = length;
    }


    increase(n){
        this.innerLength  += n;
        return this.innerLength ;
    }
    decrease(n){
        if(this.innerLength  <=n){
         return   this.innerLength  = 0;
        }
        return this.innerLength  -= n;
    }
    toString(){
        if(this.innerLength  === 0){
            return "...";
        }
       else if(this.innerLength <this.innerString.length){
            return this.innerString.substring(0, this.innerString.length - this.innerLength)+"...";
        }
        return this.innerString;
    }

}
let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test
