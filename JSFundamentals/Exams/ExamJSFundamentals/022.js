function solve(input) {

    let dilimeter = input.splice(1, 1);

    let companies = input.shift().split(`${dilimeter}`);

    let valid = [];
    let invalid = [];

    for (let i = 0; i < input.length; i++) {
        let validation = true;

        for (let j = 0; j < companies.length; j++) {
            if(input[i].toLowerCase().indexOf(companies[j]) < 0){
                validation = false;
            }




        }

        if(validation){
            valid.push(input[i].toLowerCase());
        }
        else(invalid.push(input[i].toLowerCase()));
    }


    if (invalid.length > 0 && valid.length > 0) {

        console.log("ValidSentences");
        for (let i = 1; i <= valid.length; i++) {

            console.log(`${i}. ${valid[i - 1]}`)

        }

        console.log(`=`.repeat(30));
        console.log("InvalidSentences");


        for (let i = 1; i <= invalid.length; i++) {

            console.log(`${i}. ${invalid[i - 1]}`)

        }

    }

    else if (valid.length > 0) {
        console.log("ValidSentences");
        for (let i = 1; i <= valid.length; i++) {

            console.log(`${i}. ${valid[i - 1]}`)

        }


    }

    else if (invalid.length > 0) {

        console.log("InvalidSentences");


        for (let i = 1; i <= invalid.length; i++) {

            console.log(`${i}. ${invalid[i - 1]}`)

        }
    }
}

solve(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@, ",
    "Mincho e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans",
    "someone continues as no "]
);