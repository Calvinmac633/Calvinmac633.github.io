$(document).ready(function () {
    const tabs = document.getElementsByClassName("appTabs")[0].children;
    console.log(tabs)

    tabs[0].setAttribute("class", "is-active")

    notetakerTag = document.getElementById("notetakerButton");
    notetakerTag.addEventListener("click", function () {
        tabs[0].setAttribute("class", "");
        tabs[1].setAttribute("class", "is-active");
        tabs[2].setAttribute("class", "");
        fetch("/api/images")
            .then(res => res.json())
            .then(data => loadNoteImage(data));
    })
    weatherTag = document.getElementById("weatherButton");
    weatherTag.addEventListener("click", function () {
        tabs[0].setAttribute("class", "");
        tabs[1].setAttribute("class", "");
        tabs[2].setAttribute("class", "is-active");
        fetch("/api/images")
            .then(res => res.json())
            .then(data => loadWeatherImage(data));
    });
    restaurantTag = document.getElementById("restaurantButton");
    restaurantTag.addEventListener("click", function () {
        tabs[0].setAttribute("class", "is-active");
        tabs[1].setAttribute("class", "");
        tabs[2].setAttribute("class", "");
        fetch("/api/images")
            .then(res => res.json())
            .then(data => laodRestaurantImage(data));
    })


    function loadNoteImage(data) {
        const appImg = document.getElementsByClassName("appImag")[0];
        appImg.setAttribute("src", data[2].image)
    }
    function loadWeatherImage(data) {
        const appImg = document.getElementsByClassName("appImag")[0];
        appImg.setAttribute("src", data[3].image)
    }
    function laodRestaurantImage(data) {
        const appImg = document.getElementsByClassName("appImag")[0];
        appImg.setAttribute("src", data[1].image)
    }


});
