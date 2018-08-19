function extract(input){
    let regex = new RegExp("www[.][A-Za-z0-9-]+([.][a-z]+)+", "g");
    console.log(input.map(el=>el.match(regex)).join("\n"));


}
extract(["Join WebStars now for free, at www.web-stars.com", "Internet - www.internet.com", "WebSpiders - www.webspiders101.com", "Sentinel - www.sentinel.-ko "]);