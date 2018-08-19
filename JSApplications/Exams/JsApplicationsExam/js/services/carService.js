let cars = (() => {

    function getAllListings() {
        const endpoint = 'cars?query={}&sort={"_kmd.ect": -1}'

        return remote.get('appdata', endpoint, 'kinvey');
    }

    function getListingById(carId) {

        const endpoint = `cars/${carId}`;

        return remote.get('appdata', endpoint, 'kinvey');

    }
    
    function createNewListing(seller, title, description, imageUrl, brand, model, fuel, year, price) {
        let data = {seller, title, description, imageUrl, brand, model, fuel, year, price}

        return remote.post('appdata', 'cars', 'kinvey', data);
    }

    function editListing(carId, seller, title, description, imageUrl, brand, model, fuel, year, price ) {
        const endpoint = `cars/${carId}`;

        let data = {seller, title, description, imageUrl, brand, model, fuel, year, price};

        return remote.update('appdata', endpoint, 'kinvey', data );
    }

    function deleteListing(carId) {
        const endpoint = `cars/${carId}`;

        return remote.remove('appdata', endpoint, 'kinvey');

    }
    
    function getMyListings(username) {
        const endpoint = `cars?query={"seller":"${username}"}&sort={"_kmd.ect": -1}`
        return remote.get('appdata', endpoint, 'kinvey');
    }

    return {
        getAllListings,
        getListingById,
        createNewListing,
        editListing,
        deleteListing,
        getMyListings

    }
})();