$(() => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs')

        this.get('#/login', function () {
            this.loadPartials({
                loginForm: '../templates/login/loginForm.hbs'
            }).then(function () {
                this.partial('../templates/login/loginPage.hbs');
            })

        })
    });

    app.run();
});