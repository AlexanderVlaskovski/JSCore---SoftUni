function solve(input) {

    let fullPattern = /<svg>\s*<cat>\s*<text>.+\[(.+|\n)\]\s*<\/text>\s*<\/cat>\s*<cat>\s*(<g>\s*<val>\s*([0-9]+)\s*<\/val>\s*([0-9]+)\s*<\/g>)*<\/cat><\/svg>/gm;
    if (!input.match(fullPattern)) {
        console.log("No survey found");
    }
    else {
        let text = input.match(fullPattern)[0];
        let survey = fullPattern.exec(text)[1];
        let groupPatern = /\s*<g><val>([0-9]+)<\/val>([0-9]+)<\/g>/g;
        let matchedGroups = text.match(groupPatern);
        if (matchedGroups.length === 0) {
            console.log("Invalid format");
        }
        else {


            let currentMatch = groupPatern.exec(matchedGroups);
            let sum = 0;
            let votes = 0;
            while (currentMatch) {

                let value = currentMatch[1];
                let count = currentMatch[2];
                if (value > 0 && value <= 10) {
                    sum += Number(value) * Number(count);
                    votes += Number(count);

                    currentMatch = groupPatern.exec(matchedGroups);
                }
            }
            let average = (sum / votes).toFixed(2);

            console.log(`${survey}: ${average}`);

        }
    }

}

solve('<svg><cat><text>How do you rate the special menu? [Food - Special]</text></cat><cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>');
