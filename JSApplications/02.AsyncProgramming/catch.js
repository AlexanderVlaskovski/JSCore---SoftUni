function attachEvents() {
    const URL = 'https://baas.kinvey.com/appdata/kid_r1OfT3eE7/biggestCatches';
    const USERNAME = 'Peyo';
    const PASSWORD = 'peyo';
    const BASE_64 = btoa(USERNAME + ':' + PASSWORD);
    const AUTH = {"Authorization": 'Basic ' + BASE_64};
    const fieldMain = $('#main');

    const btnLoad = $('.load');
    const btnAdd = $('.add');

    btnLoad.on('click', listCatches);
    btnAdd.on('click', addCatch);

    function addCatch() {
        let inputs = $(this).parent().find('input');


        $.ajax({
            method: 'POST',
            url: URL,
            headers: {"Authorization": 'Basic ' + BASE_64, "Content-type": 'application/json'},
            data: JSON.stringify({
                angler: $(inputs[0]).val(),
                weight: Number($(inputs[1]).val()),
                species: $(inputs[2]).val(),
                location: $(inputs[3]).val(),
                bait: $(inputs[4]).val(),
                captureTime: Number($(inputs[5]).val())
            })
        }).then(listCatches).catch(handleErr);

        for (let input of inputs) {
            $(input).val('');
        }

    }

    function listCatches() {

        $.ajax({
            method: "GET",
            url: 'https://baas.kinvey.com/appdata/kid_r1OfT3eE7/biggestCatches',
            headers: AUTH
        }).then(appendCatches).catch(handleErr)

    }

    function appendCatches(catches) {
        fieldMain.empty();
        fieldMain.append($('<legend>Catches</legend>'));
        if(catches.length > 0) {
            let mainDiv = $('<div id="catches"></div>');
            for (let currentCatch of catches) {
                let currDiv = $(`<div class='catch'></div>`);
                currDiv.attr('data-id', `${currentCatch._id}`);
                let angler = $(`<label>Angler</label>`).append($(`<input type="text" class="angler" value="${currentCatch.angler}">`))
                let weight = $(`<label>Weight</label>`).append($(`<input type="number" class="weight" value="${currentCatch.weight}">`))
                let species = $(`<label>Species</label>`).append($(`<input type="text" class="species" value="${currentCatch.species}">`))
                let location = $(`<label>Location</label>`).append($(`<input type="text" class="location" value="${currentCatch.location}">`))
                let bait = $(`<label>Bait</label>`).append($(`<input type="text" class="bait" value="${currentCatch.bait}">`))
                let captureTime = $(`<label>Capture Time</label>`).append($(`<input type="number" class="captureTime" value="${currentCatch.captureTime}">`))
                currDiv.append(angler);
                currDiv.append(weight);
                currDiv.append(species);
                currDiv.append(location);
                currDiv.append(bait);
                currDiv.append(captureTime);
                let updateBtn = $(`<button class="update">Update</button>`).on('click', update);
                let deleteBtn = $(`<button class="delete">Delete</button>`).on('click', remove);
                currDiv.append(updateBtn);
                currDiv.append(deleteBtn);
                currDiv.appendTo(mainDiv);
            }
            fieldMain.append(mainDiv);
        }
    }

    function remove() {
        let id = $(this).parent().attr('data-id');
        $.ajax({
            method: 'DELETE',
            url: URL + "/" + id,
            headers: AUTH
        }).then(listCatches).catch(handleErr)
    }

    function update() {
        let inputs = $(this).parent().find('input');
        let id = $(this).parent().attr('data-id');
        $.ajax({
            method: 'PUT',
            url: URL + "/" + id,
            headers: {"Authorization": 'Basic ' + BASE_64, "Content-type": 'application/json'},
            data: JSON.stringify({
                angler: $(inputs[0]).val(),
                weight: Number($(inputs[1]).val()),
                species: $(inputs[2]).val(),
                location: $(inputs[3]).val(),
                bait: $(inputs[4]).val(),
                captureTime: Number($(inputs[5]).val())

            })
        }).then(listCatches).catch(handleErr);

    }


    function handleErr(err) {
        console.log(err);
    }

}
