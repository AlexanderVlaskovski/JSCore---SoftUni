$(() => {
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');

        this.get('#/home', getHomePage);
        this.get('index.html', getHomePage);

        this.get('#/login', (ctx) => {

            ctx.loadPartials({
                footer: './templates/common/footer.hbs',
                navigation: './templates/common/navigation.hbs'
            }).then(function () {
                this.partial('./templates/forms/loginForm.hbs')
            })

        })
        this.post('#/login', (ctx) => {
            let username = ctx.params.username;
            let password = ctx.params.password;

            if (username === '' || password === '') {
                notify.showError('All fields must be non-empty!')
            }
            else {
                auth.login(username, password)
                    .then((userData) => {
                        auth.saveSession(userData);
                        notify.showInfo('Login successful.')
                        ctx.redirect('#/allListings');
                    })
                    .catch(notify.handleError);
            }
        })

        this.get('#/register', (ctx) => {
            ctx.loadPartials({
                footer: './templates/common/footer.hbs',
                navigation: './templates/common/navigation.hbs'
            }).then(function () {
                this.partial('./templates/forms/registerForm.hbs');
            })
        });
        this.post('#/register', (ctx) => {
            let username = ctx.params.username;
            let password = ctx.params.password;
            let repeatPass = ctx.params.repeatPass;

            if (!/^[A-Za-z]{3,}$/.test(username)) {
                notify.showError('Username must be at least 3 characters long and contain only english alphabet letters!');
            } else if (!/^[A-Za-z\d]{6,}$/.test(password)) {
                notify.showError('Password must be at least 6 characters long and contain only english alphabet letters!');
            } else if (repeatPass !== password) {
                notify.showError('Passwords must match!');
            } else {
                auth.register(username, password)
                    .then((userData) => {
                        auth.saveSession(userData);
                        notify.showInfo('User registration successful.');
                        ctx.redirect('#/allListings');
                    })
                    .catch(notify.handleError);

            }
        });

        this.get('#/logout', (ctx) => {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }
            auth.logout()
                .then(() => {
                    notify.showInfo('Logout successful.')
                    sessionStorage.clear();
                    ctx.redirect('#/home');
                })
                .catch(notify.handleError);
        });

        this.get('#/allListings', (ctx) => {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }
            cars.getAllListings()
                .then((cars) => {
                    cars.forEach((c, i) => {
                        c.isAuthor = c._acl.creator === sessionStorage.getItem('userId');
                    });

                    ctx.isAuth = auth.isAuth();
                    ctx.username = sessionStorage.getItem('username');
                    ctx.cars = cars;


                    ctx.loadPartials({
                        footer: './templates/common/footer.hbs',
                        navigation: './templates/common/navigation.hbs',
                        carListing: './templates/listings/carListing.hbs'
                    }).then(function () {
                        this.partial('./templates/listings/carCatalog.hbs')
                    })
                }).catch(notify.handleError);
        });
        this.get('#/details/:carId', (ctx) => {

            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }

            let carId = ctx.params.carId;

            cars.getListingById(carId)
                .then((car) => {
                    ctx.isAuthor = car._acl.creator === sessionStorage.getItem('userId');
                    ctx.isAuth = auth.isAuth();
                    ctx.username = sessionStorage.getItem('username');
                    ctx.car = car;

                    ctx.loadPartials({
                        footer: './templates/common/footer.hbs',
                        navigation: './templates/common/navigation.hbs'
                    }).then(function () {
                        this.partial('./templates/listings/carDetails.hbs');
                    })

                }).catch(notify.handleError);
        });

        this.get('#/edit/:carId', (ctx) =>{

            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }

            let carId = ctx.params.carId;

            cars.getListingById(carId)
                .then((car)=>{
                    ctx.isAuth = auth.isAuth();
                    ctx.username = sessionStorage.getItem('username');
                    ctx.car = car;

                    ctx.loadPartials({
                        footer: './templates/common/footer.hbs',
                        navigation: './templates/common/navigation.hbs',
                    }).then(function () {
                        this.partial('./templates/listings/editListing.hbs')
                    })
                }).catch(notify.handleError);

        });
        this.post('#/edit', (ctx) =>{
            let title = ctx.params.title;
            let description = ctx.params.description;
            let brand = ctx.params.brand;
            let model = ctx.params.model;
            let year = ctx.params.year;
            let imageUrl = ctx.params.imageUrl;
            let fuel = ctx.params.fuelType;
            let price = ctx.params.price;
            let seller = sessionStorage.getItem('username');
            let carId = ctx.params.carId;

            if(title.length > 33){
                notify.showError('Title length must not exceed 33 characters!')
            }
            else if(description.length > 450){
                notify.showError('Description length must not exceed 450 characters!')
            }
            else if (description.length<30){
                notify.showError('Description length must be at least 30 characters!')
            }
            else if(brand.length > 11){
                notify.showError('Brand must not exceed 11 characters!')
            }
            else if(fuel.length > 11){
                notify.showError('Fuel type must not exceed 11 characters!')
            }
            else if(model.length > 11){
                notify.showError('Model must not exceed 11 characters!')
            }
            else if(model.length < 4){
                notify.showError('Model must be at least 4 characters! ')
            }
            else if(year.length !== 4){
                notify.showError('Year must be 4 characters long!')
            }
            else if(Number(price) > 1000000){
                notify.showError('Price must not exceed 1000000$!')
            }
            else if(!imageUrl.startsWith('http')){
                notify.showError('Link url must start with "http"!')
            }
            else {
            cars.editListing(carId, seller, title, description, imageUrl, brand, model, fuel, year, price)
                .then(()=>{
                    notify.showInfo(`Listing ${title} updated.`);
                    ctx.redirect('#/allListings');
                })
                .catch(notify.handleError);
            }

        });

        this.get('#/myListings', (ctx) =>{

            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }

            let username = sessionStorage.getItem('username');
            ctx.username = username;
            cars.getMyListings(username).then((cars)=>{
                // cars.forEach((c, i) =>{
                //
                // })
                ctx.isAuth = auth.isAuth();
                ctx.cars = cars;
                ctx.loadPartials({
                    footer: './templates/common/footer.hbs',
                    navigation: './templates/common/navigation.hbs',
                    myCar: './templates/listings/myCar.hbs'

                }).then(function () {
                    this.partial('./templates/listings/myListings.hbs');
                })
            }).catch(notify.handleError);
        })

        this.get('#/delete/:carId', (ctx) =>{
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }

            let carId = ctx.params.carId;

            cars.deleteListing(carId)
                .then(()=>{
                    notify.showInfo('Listing deleted.');
                    ctx.redirect('#/allListings');
                })
                .catch(notify.handleError)
        })

        this.get('#/createListing', (ctx) =>{
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }
            ctx.username = sessionStorage.getItem('username');
            ctx.isAuth = auth.isAuth();
            ctx.loadPartials({
                footer: './templates/common/footer.hbs',
                navigation: './templates/common/navigation.hbs'
            }).then(function () {
                this.partial('./templates/listings/createListing.hbs')
            })


        })
        this.post('#/createListing', (ctx) =>{
            let title = ctx.params.title;
            let description = ctx.params.description;
            let brand = ctx.params.brand;
            let model = ctx.params.model;
            let year = ctx.params.year;
            let imageUrl = ctx.params.imageUrl;
            let fuel = ctx.params.fuelType;
            let price = ctx.params.price;
            let seller = sessionStorage.getItem('username');



            if(title.length > 33){
                notify.showError('Title length must not exceed 33 characters!')
            }
            else if(description.length > 450){
                notify.showError('Description length must not exceed 450 characters!')
            }
            else if (description.length<30){
                notify.showError('Description length must be at least 30 characters!')
            }
            else if(brand.length > 11){
                notify.showError('Brand must not exceed 11 characters!')
            }
            else if(fuel.length > 11){
                notify.showError('Fuel type must not exceed 11 characters!')
            }
            else if(model.length > 11){
                notify.showError('Model must not exceed 11 characters!')
            }
            else if(model.length < 4){
                notify.showError('Model must be at least 4 characters! ')
            }
            else if(year.length !== 4){
                notify.showError('Year must be 4 characters long!')
            }
            else if(Number(price) > 1000000){
                notify.showError('Price must not exceed 1000000$!')
            }
            else if(!imageUrl.startsWith('http')){
                notify.showError('Link url must start with "http"!')
            }
            else{

            cars.createNewListing(seller, title, description, imageUrl, brand, model, fuel, year, price)
                .then(()=>{
                    notify.showInfo('Listing created!')
                    ctx.redirect('#/allListings');
                }).catch(notify.handleError);
            }


        })

        function getHomePage(ctx) {
            if(!auth.isAuth()) {
                ctx.isAuth = auth.isAuth();
                ctx.username = sessionStorage.getItem('username');
                ctx.loadPartials({
                    footer: './templates/common/footer.hbs',
                    navigation: './templates/common/navigation.hbs'
                }).then(function () {
                    this.partial('./templates/homePage.hbs');
                })
            }
            else{
                ctx.redirect('#/allListings')
            }
        }

    });
    app.run();
})
;