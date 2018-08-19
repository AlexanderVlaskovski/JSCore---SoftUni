const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY = 'kid_r1OfT3eE7';
const APP_SECRET = '50159ed443134a9bb6ba301148dd65fa';
const AUTH_HEADERS = {'Authorization': "Basic " + btoa(APP_KEY + ":" + APP_SECRET)};
const ADDS_PER_PAGE = 10;

function loginUser() {

    let username = $('#formLogin input[name="username"]').val();
    let password = $('#formLogin input[name="passwd"]').val();

    $.ajax({
        method: 'POST',
        url: BASE_URL + 'user/' + APP_KEY + '/login',
        headers: AUTH_HEADERS,
        data: {username, password}
    }).then(function (res) {
        signInUser(res, 'Login successful.')
    }).catch(handleAjaxError)

}

function registerUser() {
    let username = $('#formRegister input[name="username"]').val();
    let password = $('#formRegister input[name="passwd"]').val();

    $.ajax({
        method: 'POST',
        url: BASE_URL + 'user/' + APP_KEY + '/',
        headers: AUTH_HEADERS,
        data: {username, password}
    }).then(function (res) {
        signInUser(res, 'Registration successful.');
    }).catch(handleAjaxError);
}

function signInUser(res, msg) {

    saveAuthInSession(res);
    showHideMenuLinks();
    showHomeView();
    showInfo(msg);
}

function logoutUser() {

    $.ajax({
        method: 'POST',
        url: BASE_URL + 'user/' + APP_KEY + '/_logout',
        headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authToken')}
    }).then(function () {
        sessionStorage.clear();
        showHomeView();
        showHideMenuLinks();
        $('#loggedInUser').text('');
        showInfo('Logout successful');
    }).catch(handleAjaxError)

}

function createAd() {

    let title = $('#formCreateAd').find("input[name='title']").val();
    let description = $('#formCreateAd').find("textarea[name='description']").val();
    let year = $('#formCreateAd').find('input[name="datePublished"]').val();
    let price = Number($('#formCreateAd').find('input[name="price"]').val()).toFixed(2);
    let username = sessionStorage.getItem('username');
    price.toString();

    if (title !== '' && description !== '' && year !== '' && price !== '') {
        $.ajax({
            method: 'POST',
            url: BASE_URL + 'appdata/' + APP_KEY + '/bananas',
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authToken')},
            data: {title, description, price, year, username}
        }).then(function (res) {
            listAds();
            showInfo('Advertisement created');
        }).catch(handleAjaxError)
    }
    else {
        showError('Invalid input');
    }

}

function listAds() {

    $.ajax({
        method: 'GET',
        url: BASE_URL + 'appdata/' + APP_KEY + '/bananas',
        headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authToken')}
    }).then(function (res) {
        displayAdvertisements(res);
    }).catch(handleAjaxError);

}

function displayAdvertisements(advertisementsInfo) {

    showView('viewAds');
    $('#ads table tr').each((index, element) => {
        if (index > 0) {
            $(element).remove();
        }
    });
    $('#ads').show();
    let tableBody = $('#ads > table > tbody');
    for (let currentAdvertisement of advertisementsInfo) {
        let title = currentAdvertisement.title;
        let publisher = currentAdvertisement.username;
        let description = currentAdvertisement.description;
        let price = currentAdvertisement.price;
        let datePublished = currentAdvertisement.year;

        let titleTd = $(`<td>${title}</td>`);
        let publisherTd = $(`<td>${publisher}</td>`);
        let descriptionTd = $(`<td>${description}</td>`);
        let priceTd = $(`<td>${price}</td>`);
        let dateTd = $(`<td>${datePublished}</td>`);

        let currentTr = $('<tr>');
        currentTr.append(titleTd);
        currentTr.append(publisherTd);
        currentTr.append(descriptionTd);
        currentTr.append(priceTd);
        currentTr.append(dateTd);


        if (currentAdvertisement._acl.creator === sessionStorage.getItem('userId')) {
            let td = $('<td>');
            let aDel = $('<a href="#">[Delete]</a>').on('click', function () {
                deleteAdvertisement(currentAdvertisement);
            });
            let aEdit = $('<a href="#">[Edit]</a>').on('click', function () {
                editAdvertisement(currentAdvertisement);
            });
            td.append(aDel);
            td.append(aEdit);
            currentTr.append(td);
        }

        tableBody.append(currentTr);

    }
}

function deleteAdvertisement(current) {
    $.ajax({
        method: 'DELETE',
        url: BASE_URL + 'appdata/' + APP_KEY + '/bananas/' + current._id,
        headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authToken')}
    }).then(function () {
        listAds();
        showInfo('Advertisement deleted.');
    }).catch(handleAjaxError)
}


function editAdvertisement(current) {

    showEditAd();

    $('#formEditAd').find("input[name='title']").val(current.title);
    $('#formEditAd').find("textarea[name='description']").val(current.description);
    $('#formEditAd').find('input[name="datePublished"]').val(current.year);
    $('#formEditAd').find('input[name="price"]').val(current.price);
    let id = current._id;
    let authToken = sessionStorage.getItem('authToken');
    $('#buttonEditAd').on('click', function () {
        saveEdit(id);

    })

}

function saveEdit(id){
    console.log('bratle')
    let title = $('#formEditAd').find("input[name='title']").val();
    let description = $('#formEditAd').find("textarea[name='description']").val();
    let year = $('#formEditAd').find('input[name="datePublished"]').val();
    let price = $('#formEditAd').find('input[name="price"]').val();
    let username = sessionStorage.getItem('username');
    $.ajax({
        method: 'PUT',
        url: BASE_URL + 'appdata/' + APP_KEY + /bananas/ + id,
        headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authToken')},
        data: {title, description, year, price, username}
    }).then(listAds())
    .catch(handleAjaxError)
}

function saveAuthInSession(userInfo) {

    sessionStorage.setItem('authToken', userInfo._kmd.authtoken);
    sessionStorage.setItem('username', userInfo.username);
    sessionStorage.setItem('userId', userInfo._id);
}

function handleAjaxError(response) {
    let errorMsg = JSON.stringify(response);
    if (response.readyState === 0)
        errorMsg = "Cannot connect due to network error.";
    if (response.responseJSON && response.responseJSON.description)
        errorMsg = response.responseJSON.description;
    showError(errorMsg)
}