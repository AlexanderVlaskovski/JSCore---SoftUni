function addSticker() {
    let titleInput = $(`.title`);
    let textInput = $(`.content`);
    let stickerBoard = $(`#sticker-list`);


    if (titleInput.val() !== '' && textInput.val() !== '') {
        var sticker = $(`<li class="note-content">`);
        let button = $(`<a class="button">x</a>`).click(function (event) {
            $(event.target).parent().remove();
        });
        let titleContent = $(`<h2>${titleInput.val()}</h2>`);
        let hr = $(`<hr>`);
        let textContent = $(`<p>${textInput.val()}</p>`);
        button.appendTo(sticker);
        titleContent.appendTo(sticker);
        hr.appendTo(sticker);
        textContent.appendTo(sticker);


        stickerBoard.append(sticker);

        titleInput.val('');
        textInput.val('')
    }


}