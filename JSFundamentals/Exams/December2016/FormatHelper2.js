function solve(text) {
    console.log(text
        .replace(/([.,!?:;])(?=[^\s.]+)/gm, m => m + ' ') // After punctuation -> Lack of space
        .replace(/([.,!?:;])\s{2,}/gm, (match, g1) => g1 + ' ') // After punctuation -> Multiple spaces
        .replace(/\s+([.,!?:;])/gm, (match, g1) => g1) // Before punctuation
        .replace(/([0-9]+)(\s*\.\s*?)(?=[0-9])/gm, (match, g1) => g1 + '.') // Digits with Dot
        .replace(/(")(\s*.+?\s*)\1/gm, (match, g1, g2) => g1 + g2.trim() + g1)); // Quotes

}

solve('Terribly formatted text . With chaotic spacings." Terrible quoting "! Also this date is pretty confusing : 20 . 12. 16 .');