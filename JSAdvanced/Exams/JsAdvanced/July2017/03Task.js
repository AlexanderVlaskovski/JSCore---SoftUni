class Task {
    constructor(title, deadline) {
        this.title = title;
        this.status = 'Open';
        this._status_ = {
            'Open': "\u2731",
            'In Progress': "\u219D ",
            'Complete': "\u2714",
            true: "\u26A0"

        };
        this.deadline = deadline;
        this.isOverdue = function () {
            if (this.status !== 'Complete' && this.deadline.getTime() < Date.now()) {
                return true;
            }
            return false;
        };
    }


    get deadline() {
        return this._deadline;
    }

    set deadline(value) {
        if (Date.now() > value.getTime()) {
            throw new Error('Past date!')
        }
        else {
            return this._deadline = value;
        }
    }

    toString() {
        if (this.isOverdue()) {
            console.log(`[\u26A0] ${this.title}(overdue)`);
        }
        else {
            let that = this.status;
            let char = this._status_[that];
            return `[${char}] ${this.title} (deadline: ${this.deadline})`;
        }
    }

    static comparator(a, b) {
        let rankA = a.isOverdue ? 0 : getRank(a.status);
        let rankB = b.isOverdue ? 0 : getRank(b.status);
        if (rankA - rankB !== 0) {
            return rankA - rankB;
        }
        return a.deadline - b.deadline;

        function getRank(r) {
            switch (r) {
                case "Open":
                    return 2;
                    break;
                case "In Progress":
                    return 1;
                    break;
                case "Complete":
                    return 3;
                break;
            }
        }
    }


}

let date1 = new Date();
date1.setDate(date1.getDate() + 7); // Set date 7 days from now
let task1 = new Task('JS Homework', date1);
let date2 = new Date();
date2.setFullYear(date2.getFullYear() + 1); // Set date 1 year from now
let task2 = new Task('Start career', date2);
console.log(task1 + '\n' + task2);
let date3 = new Date();
date3.setDate(date3.getDate() + 3); // Set date 3 days from now
let task3 = new Task('football', date3);
// Create two tasks with deadline set to current time
let task4 = new Task('Task 4', new Date());
let task5 = new Task('Task 5', new Date());
task1.status = 'In Progress';
task3.status = 'In Progress';
task5.status = "Complete";
let tasks = [task1, task2, task3, task4, task5];
setTimeout(() => {
    tasks.sort(Task.comparator);
    console.log(tasks.join('\n'));
}, 1000); // Sort and print one second later
// should throw an Error
//let overdueTask = new Task('Overdue Task', new Date(2005, '4', '20'));
// should throw an Error
//task1.deadline = new Date(2005, '4', '20');
