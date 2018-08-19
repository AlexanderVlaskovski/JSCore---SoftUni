function solve(input, criteria) {
    class Ticket {
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let tickets = [];
    for (const info of input) {
        let tokens = info.split('|');
        let destination = tokens[0];
        let price = tokens[1];
        let status = tokens[2];
        let currentTicket = new Ticket(destination, price, status);
        tickets.push(currentTicket);


    }
    if(criteria !== 'price'){
        console.log(tickets.sort((a, b) => a[`${criteria}`].localeCompare(b[`${criteria}`])));
        // return tickets.sort((a, b) => {
       // return a[`${criteria}`].localeCompare(b[`${criteria}`])
    }
    else{
        console.log(tickets.sort((a, b) => a[`${criteria}`] - b[`${criteria}`]));
        // return tickets.sort((a, b) => {
       //     return a[`${criteria}`]- b[`${criteria}`]
       // });
    }


}

solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'price');
