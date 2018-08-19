function solve(input) {

    let delimeter = input.splice(1, 1);
    let companies = input.shift().split(`${delimeter}`).filter(a => a !== "");

    let valid = [];
    let invalid = [];

    for (let i = 0; i < input.length; i++) {
        let currentSentence = input[i].split(" ").map(a => a.toLowerCase());
        let validation = true;
        for (let j = 0; j < companies.length; j++) {
            if (!currentSentence.includes(companies[j])) {
                validation = false;
            }
        }

        if (!validation) {
            invalid.push(currentSentence.join(" "));
        }
        else {
            valid.push(currentSentence.join(" "));
        }

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
    "Mincho    e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
    "dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS"]


);