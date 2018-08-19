function solve(input) {

    let spacingPattern = /(\s*)(?:[".,!?:;])(\s*)/gm;

    let matchGroups = spacingPattern.exec(input);
   // console.log(matchGroups);

    let match = input.match(spacingPattern);
    console.log(match);

    while(matchGroups){


        matchGroups = spacingPattern.exec(input);
        //console.log(matchGroups);

    }

}

solve('Terribly formatted text . With chaotic spacings." Terrible quoting "! Also this date is pretty confusing : 20 . 12. 16 .');