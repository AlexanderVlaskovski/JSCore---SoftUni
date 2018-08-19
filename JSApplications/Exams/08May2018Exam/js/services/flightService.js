let flights = (() => {
    function getAllFlights() {
        const endpoint = 'flights?query={"isPublished":"true"}';
        return remote.get('appdata', endpoint, 'kinvey');
    }
    
    function createFlight(author, destination, origin, departure, departureTime, seats, cost, image, isPublished) {
        let data = {author, destination, origin, departure, departureTime, seats, cost, image, isPublished};

        return remote.post('appdata', 'flights', 'kinvey', data);
    }

    function getFlightById(flightId) {

        const endpoint = `flights/${flightId}`;

        return remote.get('appdata', endpoint, 'kinvey');

    }

    function editFlight(flightId, author, destination, origin, departure, departureTime, seats, cost, image, isPublished) {
        const endpoint = `flights/${flightId}`;
        let data = {author, destination, origin, departure, departureTime, seats, cost, image, isPublished};

        return remote.update('appdata', endpoint, 'kinvey', data)

    }

    function getMyFlights(userId) {
        const endpoint = `flights?query={"_acl.creator":"${userId}"}`;

        return remote.get('appdata', endpoint, 'kinvey');
    }

    function deleteFlight(flightId) {
        const endpoint = `flights/${flightId}`;

        return remote.remove('appdata', endpoint, 'kinvey');
    }

return {
    getAllFlights,
    createFlight,
    getFlightById,
    editFlight,
    getMyFlights,
    deleteFlight

}
})();