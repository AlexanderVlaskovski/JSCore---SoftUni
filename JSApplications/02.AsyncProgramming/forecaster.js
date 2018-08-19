function attachEvents() {
    let submitBtn = $(`#submit`);
    let location = $(`#location`);
    let currentConditions = $(`#current`);
    let upcomingConditions = $("#upcoming");


    submitBtn.on('click', getConditions);


    function getConditions() {
        let currLoc = location.val();
        if (currLoc !== '') {

            $.ajax({
                method: 'GET',
                url: 'https://judgetests.firebaseio.com/locations.json'+ `?query={"name":"${location.val()}"}`
            }).then(getCode).catch(errHandle)
        }
    }

    function getCode(result) {
        let currResult = result.filter(a=> a.name === location.val())[0]
        let code = currResult.code;
        $.ajax({
            method: "GET",
            url: `https://judgetests.firebaseio.com/forecast/today/${code}.json`
        }).then(appendCurrentConditions).catch(errHandle);

        $.ajax({
            method: "GET",
            url: `https://judgetests.firebaseio.com/forecast/upcoming/${code}.json`
        }).then(appendUpcomingConditions).catch(errHandle);
    }

    function appendUpcomingConditions(upcoming) {
        upcomingConditions.empty();
        $(`<div class="label">Three-day forecast</div>`).appendTo(upcomingConditions);
        let arrayOfTemp = upcoming.forecast;

        for(let currentTemp of arrayOfTemp){
            let currentCondition = currentTemp.condition;
            let high = currentTemp.high;
            let low = currentTemp.low;
            let symbol = getSymbol(currentCondition);

            let spanUpcomming = $(`<span class='upcoming'></span>`);
            let spanSymbol = $(`<span class="symbol">${symbol}</span>`);
            let tempData = $(`<span class='forecast-data'>${low}&#176;/${high}&#176;</span>`);
            let conditionData = $(`<span class='forecast-data'>${currentCondition}</span>`);

            spanSymbol.appendTo(spanUpcomming);
            tempData.appendTo(spanUpcomming);
            conditionData.appendTo(spanUpcomming);
            spanUpcomming.appendTo(upcomingConditions);
        }
    }

    function appendCurrentConditions(conditions) {
        currentConditions.empty();
        $(`<div class="label">Current conditions</div>`).appendTo(currentConditions);
        let name = conditions.name;
        let currentCondition = conditions.forecast.condition;
        let high = conditions.forecast.high;
        let low = conditions.forecast.low;
        let symbol = getSymbol(currentCondition);

        $(`#forecast`).show();

        let spanSymbol = $(`<span class="condition symbol">${symbol}</span>`);
        let condition = $(`<span class="condition">`);
        let nameData = $(`<span class="forecast-data">${name}</span>`);
        let tempData = $(`<span class='forecast-data'>${low}&#176;/${high}&#176;</span>`);
        let conditionData = $(`<span class='forecast-data'>${currentCondition}</span>`);
        condition.append(nameData);
        condition.append(tempData);
        condition.append(conditionData);
        currentConditions.append(spanSymbol);
        currentConditions.append(condition);
        location.val('');

    }

    function getSymbol(symbol) {
        switch (symbol) {
            case 'Sunny':
                return '&#x2600';
            case 'Partly sunny':
                return '&#x26C5;';
            case 'Overcast':
                return '&#x2601;';
            case 'Rain':
                return '&#x2614;';
            case 'Degrees':
                return '&#176;';
        }
    }

    function errHandle(err) {
        console.log(err);

    }
}