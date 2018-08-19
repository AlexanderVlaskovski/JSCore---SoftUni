class BookCollection{
    constructor(shelfGenre, room, shelfCapacity){
        this.shelfGenre = shelfGenre;
        this.shelf = [];
        this.shelfCapacity = Number(shelfCapacity);
        this._books = 0;
        this.room = room;
    }

    get shelfCondition(){
        return this.shelfCapacity - this._books;
    }

    get room() {
        return this._room;
    }

    set room(value) {
        if(value !== 'livingRoom' && value !== 'bedRoom' && value !== 'closet'){
            let result = `"Cannot have book shelf in ${value}"`
            throw (result)
        }
        else{
            return this._room = value;
        }
    }

    addBook(bookName, bookAuthor, genre){
        if(this._books === this.shelfCapacity){
            this.shelf.shift();
        }
        let currBook = {
            'bookName': bookName,
            'bookAuthor': bookAuthor,
        }
        if(genre !== undefined){
            currBook['genre'] = genre;
        }
        this.shelf.push(currBook);
        this._books++;
        this.shelf.sort((a, b) => a.bookAuthor.localeCompare(b.bookAuthor));
        return this;
    }

    throwAwayBook(bookName){
        this.shelf = this.shelf.filter(a=>a.bookName !== bookName);
    }

    showBooks(genre){
        let searchedBook = this.shelf.filter(a=>a.hasOwnProperty('genre') === true).filter(a=>a.genre === genre);
        let result = `Results for search "${genre}":`;
        for (let book of searchedBook) {
            result += `\n\uD83D\uDCD6 ${book.bookName} - "${book.bookAuthor}"`
        }
        return result;
    }

    toString(){
        if(this.shelf.length < 1){
            return `It's an empty shelf`;
        }
        else{
            let result = `"${this.shelfGenre}" shelf in ${this.room} contains:`;
            for (let book of this.shelf) {
                result += `\n\uD83D\uDCD6 "${book.bookName}" - ${book.bookAuthor}`;
            }
            return result;
        }
    }
}

// let livingRoom = new BookCollection("Programming", "livingRoom", 5)
//     .addBook("Introduction to Programming with C#", "Svetlin Nakov")
//     .addBook("Introduction to Programming with Java", "Svetlin Nakov")
//     .addBook("Programming for .NET Framework", "Svetlin Nakov");
// console.log(livingRoom.toString());
let garden = new BookCollection("Programming", "garden");
// let bedRoom = new BookCollection('Mixed', 'bedRoom', 5);
// bedRoom.addBook("John Adams", "David McCullough", "history");
// bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
// bedRoom.addBook("Atlas of Remote Islands", "Judith Schalansky");
// bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
// console.log("Shelf's capacity: " + bedRoom.shelfCondition);
// console.log(bedRoom.showBooks("history"));





