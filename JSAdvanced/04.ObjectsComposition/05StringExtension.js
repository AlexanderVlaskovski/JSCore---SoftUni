(function () {

    String.prototype.ensureStart = function (str) {

        if(this.substr(0, str.length) !== str){
            return str+this;
        }
        else{
            return this.toString();
        }
    }
    String.prototype.ensureEnd = function (str) {

        if(this.substr(this.length-str.length, this.length-1) !== str){
            return this.toString() + str;
        }
        else{
            return this.toString();
        }
    }
    String.prototype.isEmpty = function () {
        if(this.toString() === ""){
            return true;
        }
        else {
            return false;
        }

    }

    String.prototype.truncate = function (n) {
        if(n <= 3){
            return ".".repeat(n);
        }
        if(this.toString().length <= n){
            return this.toString();
        } else {
            let lastIndex = this.toString().substr(0, n - 2).lastIndexOf(" ");
            if(lastIndex !== -1){
                return this.toString().substr(0, lastIndex) + "...";
            } else {
                return this.toString().substr(0, n-3) + "...";
            }
        }

    };

    String.format = function (string, ...params) {
        for(let i=0; i<params.length; i++){
            let index = string.indexOf("{"+i+"}");
            while (index !== -1) {
                string = string.replace("{"+i+"}", params[i]);
                index = string.indexOf("{"+i+"}");
            }
        }
        return string;
        }
    
})();

let test = "";
console.log(test.isEmpty());