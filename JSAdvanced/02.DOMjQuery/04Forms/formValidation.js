function validate() {
    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confimPassword = $('#confirm-password');
    let companyCheckbox = $('#company');
    let companyNumber = $('#companyNumber');
    let companyInfo = $('#companyInfo');
    let sumbitBtn = $('#submit');
    let validationDiv = $('#valid');

    let allIsValid = true;

    companyCheckbox.on('change', function () {

        if (companyCheckbox.is(':checked')) {
            companyInfo.css('display', 'block');
        }
        else {
            companyInfo.css('display', 'none');
        }
    });

    sumbitBtn.on('click', function (ev) {

        ev.preventDefault();
        validateForm();
        validationDiv.css('display', allIsValid ? "block" : "none");
        allIsValid = true;

    });

    function validateForm() {
        validateInputWithRegex(username, /^[A-Za-z\d]{3,20}$/g);
        validateInputWithRegex(email, /^.*?@.*\..*$/g);
        if (confimPassword.val() === password.val()) {
            validateInputWithRegex(password, /^\w{5,15}$/g);
        }
        else {
            allIsValid = false;
            password.css('border', 'solid red');
            confimPassword.css('border', 'solid red');
        }

        if(companyCheckbox.is(':checked')){
            validateCompanyInfo();
        }

    }

    function validateInputWithRegex(input, pattern) {

        if (pattern.test(input.val())) {

            input.css('border', 'none');

        }

        else {

            input.css('border', 'solid red');
            allIsValid = false;
        }

    }

    function validateCompanyInfo() {
        let numValue = Number(companyNumber.val());

        if(numValue>= 1000 && numValue <= 9999){
            companyNumber.css('border', 'none');

        }
        else{
            companyNumber.css('border', 'solid red');
            allIsValid = false;
        }



    }
}
