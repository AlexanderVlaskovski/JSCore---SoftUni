function solve(input) {

    for (var i = 0; i < input.length; i+=2) {
        let x = input[i];
        let y = input[i+1];

        if(1<=x && 3>=x && 1<=y && 3>=y ){
            console.log("Tuvalu");
        }
        else if(8<=x && 9>=x && 0<=y && 1>=y ){
            console.log("Tokelau");
        }
        else if(5<=x && 7>=x && 3<=y && 6>=y ){
            console.log("Samoa");
        }
        else if(0<=x && 2>=x && 6<=y && 8>=y ){
            console.log("Tonga");
        }
        else if(4<=x && 9>=x && 7<=y && 8>=y ){
            console.log("Cook");
        }
        else{
            console.log("On the bottom of the ocean");
        }

    }

}
solve([4, 2, 1.5, 6.5, 1, 3]);