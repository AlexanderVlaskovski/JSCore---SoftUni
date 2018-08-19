function result() {
    let summary = new Map();
    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        let type = typeof obj;
        console.log(type + ": " + obj);

        if(!summary.has(type)){
            summary.set(type, 1);
        }
        else{
            summary.set(type, summary.get(type) + 1)        }
    }



    summary[Symbol.iterator] = function* () {
        yield* [...this.entries()].sort((a, b) => b[1] - a[1]);
    };
    for (let [key, value] of summary) {
        console.log(key + " = " + value);

    }
}

result('cat', 42, 32, 31, function () { console.log('Hello world!'); });