$(() => {
    renderCatTemplate();

    async function renderCatTemplate() {
        let cats = window.cats;

        let source = await $.get("catTemplate.hbs");
        let template = Handlebars.compile(source);
0
        let context = {
            cats
        };

        let html = template(context);

        $('#allCats').append($(html));
    }

});

function showInfo(id) {
    let current = $(`#${id}`);
    if (current.prev().text() === 'Show status code') {
        current.prev().text('Hide status code')
    }
    else {
        current.prev().text('Show status code')
    }
    console.log();
    current.toggle();

}
