function solve(input){

    let countryPattern = /\b[A-Z][A-zA-Z]+[A-Z]\b/;
    let text = input[3];

    let country = text.match(countryPattern)[0];
    let startIndex = Number(input[0]);
    let endIndex = Number(input[1]);
    let toReplace = country.slice(startIndex, endIndex+1);

    let trueCountry = country.replace(toReplace, input[2]);
    let countryArray = [];
    for (let i = 0; i < trueCountry.length-1; i++) {

        countryArray[i] = trueCountry[i];
        countryArray[trueCountry.length] = trueCountry[trueCountry.length-1].toLowerCase();

    }
    let countryToPrint = countryArray.join("");

    let numberPattern = /[0-9]{3}(\.[0-9]+)?/gm;

    let numbers = text.match(numberPattern).map(e=>Number(e)).map(e=>Math.ceil(e));

    let town = "";

    for (let i = 0; i < numbers.length; i++) {
        if(i === 0){
            let currentLetter = String.fromCharCode(numbers[i]).toUpperCase();
            town+= currentLetter;
        }
        else{
            let currentLetter = String.fromCharCode(numbers[i]);
            town+= currentLetter;
        }


    }

    console.log(`${countryToPrint} => ${town}`);


}


//solve(["3", "5", "gar","114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"]);
solve(["1", "4","loveni", "SerbiA 67 – sDf1d17ia aTe 1, 108 confin$4%#ed likewise it humanity  Bulg35aria - VarnA railLery1a0s1 111 an unpacked as 109 he"]);