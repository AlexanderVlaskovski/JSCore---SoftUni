function attachEvents() {

    $("#btnLoadTowns").on('click', async function () {
        let towns = $("#towns").val().split(', ').filter(e => e !== '').map(e => {
            return {
                town: e
            };
        });
        if (towns) {
            let source = await $.get('./templates/towns-template.hbs');
            let template = Handlebars.compile(source);
            let context = {
                towns
            };
            let html = template(context);
            $('#root').append($(html));
            $("#towns").val('');

        }
    })
}