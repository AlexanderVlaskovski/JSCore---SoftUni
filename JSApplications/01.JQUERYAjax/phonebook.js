function attachEvents() {

    let loadBtn = $(`#btnLoad`);
    let list = $(`#phonebook`);
    let createBtn = $('#btnCreate');
    let inputName = $('#person');
    let inputPhone = $('#phone');

    createBtn.on('click', createContact);

    loadBtn.on('click', loadContacts);

    function loadContacts() {
        $.ajax({
            method: 'GET',
            url: 'https://phonebook-nakov.firebaseio.com/phonebook.json'
        }).then(appendContacts).catch(handleError);
    }

    function appendContacts(contacts) {
        list.empty();
        let keys = Object.keys(contacts);
        for(let id of keys){
            let li = $(`<li>`);
            li.text(`${contacts[id].person}: ${contacts[id].phone}`);
            let a = $(`<button> [Delete] </button>`).on('click', function () {
               $.ajax({
                   method: 'DELETE',
                   url: `https://phonebook-nakov.firebaseio.com/phonebook/${id}.json`
               }).then(li.remove()).catch(handleError)
            });
            a.appendTo(li);
            li.appendTo(list);
        }

    }

    function createContact() {
        if (inputName.val().trim() !== '' && inputPhone.val().trim() !== '') {
            let person = inputName.val();
            let phone = inputPhone.val();
            $.ajax({
                method: 'POST',
                url: 'https://phonebook-nakov.firebaseio.com/phonebook.json',
                data: JSON.stringify({person, phone})
            }).then().catch(handleError)

        }
        inputName.val('');
        inputPhone.val('');
    }
    function handleError(err){
        console.log(err);
    }
}