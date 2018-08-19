$(() => {
    const app = Sammy('#container', function () {

        this.use('Handlebars', 'hbs');
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        this.get('#/home', getWelcomePage);
        this.get('index.html', getWelcomePage);

        this.get('#/register', (ctx) => {
            ctx.loadPartials({
                navigation: './templates/common/navigation.hbs',
                footer: './templates/common/footer.hbs',
            }).then(function () {
                this.partial('./templates/forms/registerForm.hbs')
            })
        });

        this.post('#/register', (ctx) => {
            let username = ctx.params.username;
            let password = ctx.params.pass;
            let repeatPass = ctx.params.checkPass;

            if (!/^.{5,}$/.test(username)) {
                notify.showError('Username must be at least 5 characters long!')
            }
            else if (password === '') {
                notify.showError('Password must not be empty string!')
            }
            else if (repeatPass === '') {
                notify.showError('Password must not be empty string!')
            }
            else if (repeatPass !== password) {
                notify.showError('Passwords must match!')
            }
            else {
                auth.register(username, password).then((userData) => {
                    auth.saveSession(userData);
                    notify.showInfo('User registration successful!')
                    ctx.redirect('#/catalog')
                }).catch(notify.handleError);
            }
        });

        this.get('#/login', (ctx) => {
            ctx.loadPartials({
                navigation: './templates/common/navigation.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/forms/loginForm.hbs')
            })
        });

        this.post('#/login', (ctx) => {
            let username = ctx.params.username;
            let password = ctx.params.pass;

            if (username === '' || password === '') {
                notify.showError('All fields must be non-empty!')
            }
            else {
                auth.login(username, password)
                    .then((userData) => {
                        auth.saveSession(userData);
                        notify.showInfo('Login successful.')
                        ctx.redirect('#/catalog');
                    })
                    .catch(notify.handleError);
            }
        });

        this.get('#/catalog', (ctx) => {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }


            flights.getAllFlights()
                .then((flights) => {
                    flights.forEach((p, i) => {
                        p.isAuthor = p._acl.creator === sessionStorage.getItem('userId');
                        p.day = p.departure.split('-')[2];
                        if (Number(p.departure.split('-')[1]) < 10) {
                            p.month = monthNames[parseInt(p.departure.split('-')[1], 10) - 1];
                        }
                        else {
                            p.month = monthNames[Number(p.departure.split('-')[1]) - 1];
                        }
                        p.hour = p.departureTime;
                    });

                    ctx.isAuth = auth.isAuth();
                    ctx.username = sessionStorage.getItem('username');
                    ctx.flights = flights;

                    ctx.loadPartials({
                        navigation: './templates/common/navigation.hbs',
                        footer: './templates/common/footer.hbs',
                        flight: './templates/flights/flight.hbs'
                    }).then(function () {
                        this.partial('./templates/flights/catalogPage.hbs');
                    })
                }).catch(notify.handleError);

        });

        this.get('#/details/:flightId', (ctx) => {
            let flightId = ctx.params.flightId;
            flights.getFlightById(flightId).then((flight) => {
                flight.isAuthor = flight._acl.creator === sessionStorage.getItem('userId');
                if (Number(flight.departure.split('-')[1]) < 10) {
                    ctx.month = monthNames[parseInt(flight.departure.split('-')[1], 10) - 1];
                }
                else {
                    ctx.month = monthNames[Number(flight.departure.split('-')[1]) - 1];
                }
                ctx.day = flight.departure.split('-')[2];
                ctx.isAuth = auth.isAuth;
                ctx.username = sessionStorage.getItem('username');
                ctx.isAuthor = flight.isAuthor;
                ctx.hour = flight.departureTime;
                ctx.flight = flight;
                ctx.loadPartials({
                    footer: './templates/common/footer.hbs',
                    navigation: './templates/common/navigation.hbs',
                }).then(function () {
                    this.partial('./templates/flights/flightDetail.hbs');
                })

            }).catch(notify.handleError);
        });

        this.get('#/editFlight/:flightId', (ctx) => {
            let flightId = ctx.params.flightId;
            flights.getFlightById(flightId).then((flight) => {
                flight.isAuthor = flight._acl.creator === sessionStorage.getItem('userId');
                ctx.isAuth = auth.isAuth;
                ctx.username = sessionStorage.getItem('username');
                ctx.isAuthor = flight.isAuthor;
                ctx.hour = flight.departureTime;
                ctx.flight = flight;
                if (flight.isPublished) {
                    ctx.isCheck = 'checked';
                }
                ctx.loadPartials({
                    footer: './templates/common/footer.hbs',
                    navigation: './templates/common/navigation.hbs',
                }).then(function () {
                    this.partial('./templates/flights/editFlight.hbs')
                })
            }).catch(notify.handleError);
        });

        this.post('#/editFlight', (ctx) => {
            let flightId = ctx.params.flightId;
            let author = sessionStorage.getItem('username');
            let destination = ctx.params.destination;
            let origin = ctx.params.origin;
            let departure = ctx.params.departure;
            let departureTime = ctx.params.departureTime;
            let seats = ctx.params.seats;
            let cost = ctx.params.cost;
            let image = ctx.params.image;
            console.log(ctx.params.public);
            let isPublished = false;
            if (ctx.params.public) {
                isPublished = true;
            }

            if (destination === '') {
                notify.showInfo('Destination is required!')
            }
            else if (origin === '') {
                notify.showInfo('Origin is required!')
            }
            else if (departure === '') {
                notify.showInfo('Departure must be set!')
            }
            else if (departureTime === '') {
                notify.showInfo('Departure time must be set!')
            }
            else if (typeof seats === 'number') {
                notify.showInfo('Input has to be number')
            }
            else if (typeof cost === 'number') {
                notify.showInfo('Input has to be number')
            }
            else {
                flights.editFlight(flightId, author, destination, origin, departure, departureTime, seats, cost, image, isPublished)
                    .then(() => {
                        notify.showInfo('Flight edited!');
                        ctx.redirect('#/catalog')
                    }).catch(notify.handleError);
            }

        });

        this.get('#/logout', (ctx) => {
            auth.logout()
                .then(() => {
                    notify.showInfo('Logout successful!')

                    sessionStorage.clear();
                    ctx.redirect('#/home');
                }).catch(notify.handleError);

        });

        this.get('#/addFlight', (ctx) => {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }

            ctx.isAuth = auth.isAuth();
            ctx.username = sessionStorage.getItem('username');

            ctx.loadPartials({
                footer: './templates/common/footer.hbs',
                navigation: './templates/common/navigation.hbs',
            }).then(function () {
                this.partial('./templates/flights/addFlight.hbs');
            })

        });
        this.post('#/addFlight', (ctx) => {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }

            let author = sessionStorage.getItem('username');
            let destination = ctx.params.destination;
            let origin = ctx.params.origin;
            let departure = ctx.params.departure;
            let departureTime = ctx.params.departureTime;
            let seats = ctx.params.seats;
            let cost = ctx.params.cost;
            let image = ctx.params.image;
            let isPublished = false;
            if (ctx.params.isPublished) {
                isPublished = true;
            }

            if (destination === '') {
                notify.showInfo('Destination is required!')
            }
            else if (origin === '') {
                notify.showInfo('Origin is required!')
            }
            else if (departure === '') {
                notify.showInfo('Departure must be set!')
            }
            else if (departureTime === '') {
                notify.showInfo('Departure time must be set!')
            }
            else if (typeof seats === 'number') {
                notify.showInfo('Input has to be number')
            }
            else if (typeof cost === 'number') {
                notify.showInfo('Input has to be number')
            }
            else {
                flights.createFlight(author, destination, origin, departure, departureTime, seats, cost, image, isPublished)
                    .then(() => {
                        notify.showInfo('Flight created');
                        ctx.redirect('#/catalog')
                    }).catch(notify.handleError);
            }


        });

        this.get('#/myFlights', (ctx) => {
            let userId = sessionStorage.getItem('userId');
            flights.getMyFlights(userId).then((flights) =>{
                flights.forEach((p, i) => {
                    p.day = p.departure.split('-')[2];
                    if (Number(p.departure.split('-')[1]) < 10) {
                        p.month = monthNames[parseInt(p.departure.split('-')[1], 10) - 1];
                    }
                    else {
                        p.month = monthNames[Number(p.departure.split('-')[1]) - 1];
                    }
                    p.hour = p.departureTime;
                });
                ctx.flights = flights;
                ctx.isAuth = auth.isAuth();
                ctx.username = sessionStorage.getItem('username');
                ctx.loadPartials({
                    navigation: './templates/common/navigation.hbs',
                    footer: './templates/common/footer.hbs',
                    myFlight: './templates/flights/myFlight.hbs'
                }).then(function () {
                    this.partial('./templates/flights/myFlights.hbs')
                })
            }).catch(notify.handleError)

        });

        this.get('#/delete/:flightId', (ctx) => {
            if (!auth.isAuth()) {
                ctx.redirect('#/home');
                return;
            }
            let flightId = ctx.params.flightId;

            flights.deleteFlight(flightId).then(() =>{
                notify.showInfo('Flight deleted.');
                ctx.redirect('#/myFlights');
            }).catch(notify.handleError)
        })

        function getWelcomePage(ctx) {

            if (!auth.isAuth()) {
                ctx.loadPartials({
                    footer: './templates/common/footer.hbs',
                    navigation: './templates/common/navigation.hbs',
                }).then(function () {
                    this.partial('./templates/homePage.hbs');
                })
            }
            else {
                ctx.redirect('#/catalog')
            }
        }
    });


    app.run();
});
