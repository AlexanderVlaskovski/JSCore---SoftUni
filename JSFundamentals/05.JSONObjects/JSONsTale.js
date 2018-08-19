function solve(input) {
    let table = "<table>\n";
    for (let obj of input) {
        table += "  <tr>\n";

        let currentObj = JSON.parse(obj);
        table += `    <td>${htmlEscape(currentObj.name + "")}</td>\n`;
        table += `    <td>${htmlEscape(currentObj.position + "")}</td>\n`;
        table += `    <td>${htmlEscape(currentObj.salary + "")}</td>\n`;

        table += "  <tr>\n";


    }
    table +="</table>";
    console.log(table);
    function htmlEscape (text) {

        return text.replace(/&/g, '&amp;')

            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');

    }
}

solve(["{\"name\":\"Pesho\",\"position\":\"Promenliva\",\"salary\":100000}\n",
    "{\"name\":\"Teo\",\"position\":\"Lecturer\",\"salary\":1000}\n",
    "{\"name\":\"Georgi\",\"position\":\"Lecturer\",\"salary\":1000}\n"]);