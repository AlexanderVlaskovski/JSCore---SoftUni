function solve(input) {
    console.log('<table border="1">');
    let concat = '<tr><th>x</th>';
    for (let i = 1; i <= input; i++) {
        concat += `<th>${i}</th>`;
        if (i === input) {
            concat += '</tr>';
        }
    }
    console.log(concat);
    for (let i = 1; i <= input; i++) {
        console.log(`<tr><th>${i}</th>`);
        concat = '';
        let num = i;
        if (i === 1) {
            for (let k = 1; k <= input; k++) {
                concat += `<td>${k}</td>`;
                if (k === input) {
                    concat += '</tr>';
                }
            }
            console.log(concat);
        }
        else {
            for (let j = 1; j <= input; j++) {
                concat += `<td>${num}</td>`;
                num += i;
                if (j === input) {
                    concat += '</tr>';
                }
            }
            console.log(concat);
        }
    }
    console.log('</table>');
}

document.body.innerHTML = solve(5);