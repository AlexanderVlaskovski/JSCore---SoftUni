function getSortedList() {

    return {
        list: [],
        size: 0,
        add:function (el) {
            this.list.push(el);
            this.size ++;
            this.list.sort((a,b)=>a-b);
        },
        remove: function (index) {
            if(index >= 0 && index < this.list.length){
            this.list.splice(index, 1);
            this.size --;
            }
        },
        get: function (index) {
            if(index >= 0 && index < this.list.length) {
            return this.list[index];

            }

        }

    }


}



let sortedList = getSortedList();

console.log("start size:" + sortedList.size);
sortedList.add(3);
sortedList.add(5);
sortedList.add(2);
sortedList.add(4);
sortedList.add(1);
console.log(sortedList.toString());
sortedList.remove(2);
console.log("Sorted list :" + sortedList.list.toString());
console.log("Get index :" + sortedList.get(0));
console.log("End size :"+ sortedList.size);
