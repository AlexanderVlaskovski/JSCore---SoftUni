    function uniqueArray(arrays) {
        let uniques = new Map();

        for (let arr of arrays) {
            arr = JSON.parse(arr).sort((a, b) => b - a);
            let asOutput = `[${arr.join(", ")}]`;
            if (!uniques.has(arr)) {
                uniques.set(asOutput, arr.length)
            }
        }
        console.log([...uniques.keys()].sort((arr1, arr2) => uniques.get(arr1) - uniques.get(arr2)).join("\n"))
    }
