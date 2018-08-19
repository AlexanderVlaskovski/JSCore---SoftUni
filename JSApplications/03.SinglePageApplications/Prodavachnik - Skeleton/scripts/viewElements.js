function showView(viewName) {

    $('main > section').hide();
    $('#errorBox').hide();
    $('#' + viewName).show();
}

function showHideMenuLinks() {
    $("#linkHome").show()
    if (localStorage.getItem('authToken') === null) { // No logged in user
        $("#linkLogin").show()
        $("#linkRegister").show()
        $("#linkListAds").hide()
        $("#linkCreateAd").hide()
        $("#linkLogout").hide()
    } else { // We have logged in user
        $("#linkLogin").hide()
        $("#linkRegister").hide()
        $("#linkListAds").show()
        $("#linkCreateAd").show()
        $("#linkLogout").show()
        $('#loggedInUser').text("Welcome, " + localStorage.getItem('username') + "!")
    }
}

function showHomeView() {
    showView('viewHome');
}

function showLoginView() {

    $('#formLogin').trigger('reset').find('div').show();
    showView('viewLogin');


}

function showRegisterView() {

    $('#formRegister').trigger('reset').find('div').show();
    showView('viewRegister');
}



function showCreateAd() {
    $("#formCreateAd").trigger('reset').find('div').show();
    showView('viewCreateAd');

}

function showEditAd() {

    $('#formEditAd').trigger('reset').find('div').show();
    showView('viewEditAd');

}

function showInfo(msg) {

    let infoBox = $('#infoBox');
    infoBox.text(msg);
    infoBox.show();
    setTimeout(function () {
        $('#infoBox').fadeOut()

    }, 3000);

}

function showError(errorMsg) {
    let errorBox = $('#errorBox')
    errorBox.text("Error: " + errorMsg)
    errorBox.show()
}