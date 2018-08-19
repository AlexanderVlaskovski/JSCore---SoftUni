function attachAllEvents() {

    $('#linkHome').on('click', showHomeView);
    $('#linkLogin').on('click', showLoginView);
    $('#linkRegister').on('click', showRegisterView);
    $('#linkCreateAd').on('click', showCreateAd);
    $('#linkLogout').on('click', logoutUser);
    $('#linkListAds').on('click', listAds);

    $("#buttonRegisterUser").on('click', registerUser);
    $("#buttonLoginUser").on('click', loginUser);
    $('#buttonCreateAd').on('click', createAd);
    $('#buttonEditAd').on('click', editAd);

    $(document).on({
        ajaxStart: function() { $("#loadingBox").fadeIn() },
        ajaxStop: function() { $("#loadingBox").fadeOut() }
    });
}