function createBook(selector, bookTitle, authorName, isbn) {
let bookGenerator = (function () {

    let id = 1;
    return function (selector, bookTitle, authorName, isbn) {
        let container = $(selector);
        let bookContainer = $('<div>');
        bookContainer.attr('id', 'book' + id);
        bookContainer.css('border', '');
        $(`<p class= 'title'>${bookTitle}</p>`).appendTo(bookContainer);
        $(`<p class='author'>${authorName}</p>`).appendTo(bookContainer);
        $(`<p class='isbn'>${isbn}</p>`).appendTo(bookContainer);

        let select = $('<button>Select</button>');
        let deselect = $('<button>Deselect</button>');

        select.on('click', () =>bookContainer.css('border', '2px solid blue'));
        deselect.on('click', ()=> bookContainer.css('border', ''));

        select.appendTo(bookContainer);
        deselect.appendTo(bookContainer);
        bookContainer.appendTo(container);

        id++;

    };

    
}());

bookGenerator(selector, bookTitle, authorName, isbn);



}