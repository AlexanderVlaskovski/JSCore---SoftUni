function prices([movie, day]) {
    let movieToCheck = movie.toLowerCase();
    let dayToCheck = day.toLowerCase();

    if (movieToCheck === "schindler's list"){
        if(dayToCheck === "monday" || dayToCheck === "tuesday"|| dayToCheck === "wednesday"|| dayToCheck === "thursday"|| dayToCheck === "friday")
            console.log(8.50);
        else if(dayToCheck === "saturday" || "sunday")
            console.log(15);
        else
            console.log("error");



    }
    else if(movieToCheck ==="the godfather" ) {
        switch (dayToCheck) {
            case "monday":
                console.log(12);
                break;
            case "tuesday":
                console.log(10);
                break;
            case "wednesday":
                console.log(15);
                break;
            case "thursday":
                console.log(12.50);
                break;
            case "friday":
                console.log(15);
                break;
            case "saturday":
                console.log(25);
                break;
            case "sunday":
                console.log(30);
                break;
            default:
                console.log("error");
        }
    }
        else if(movieToCheck === "casablanca") {
        if(dayToCheck === "monday" || dayToCheck === "tuesday"|| dayToCheck === "wednesday"|| dayToCheck === "thursday"|| dayToCheck === "friday")
            console.log(8);
        else if (dayToCheck === "saturday" || "sunday")
            console.log(10)
        else
            console.log("error");
    }
    else if(movieToCheck === "the wizard of oz") {
        if(dayToCheck === "monday" || dayToCheck === "tuesday"|| dayToCheck === "wednesday"|| dayToCheck === "thursday"|| dayToCheck === "friday")
            console.log(10);
        else if (dayToCheck === "saturday" || "sunday")
            console.log(15)
        else
            console.log("error");
    }
    else
        console.log("error");


}
prices(['casablanca', 'Sunday']);