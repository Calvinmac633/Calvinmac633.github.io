$(document).ready(function () {
    const tabs = document.getElementsByClassName("appTabs")[0].children;
    console.log(tabs)

    tabs[0].setAttribute("class", "is-active")

    notetakerTag = document.getElementById("notetakerButton");
    notetakerTag.addEventListener("click", function() {
        tabs[0].setAttribute("class", "");
        tabs[1].setAttribute("class", "is-active");
        tabs[2].setAttribute("class", "");
        // fetch("/api/images")
        // .then(data => createProfileImage(data))
    })
    weatherTag = document.getElementById("weatherButton");
    weatherTag.addEventListener("click", function() {
        tabs[0].setAttribute("class", "");
        tabs[1].setAttribute("class", "");
        tabs[2].setAttribute("class", "is-active");
    });
    restaurantTag = document.getElementById("restaurantButton");
    restaurantTag.addEventListener("click", function() {
        tabs[0].setAttribute("class", "is-active");
        tabs[1].setAttribute("class", "");
        tabs[2].setAttribute("class", "");
    })

});




function generateTabs() {
    tabs.forEach(element => {

    });
}


