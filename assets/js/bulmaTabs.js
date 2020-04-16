$(document).ready(function () {
    const tabs = document.getElementsByClassName("appTabs")[0].children;
    console.log(tabs)

    tabs[0].setAttribute("class", "is-active");
    let appImg = document.getElementById("appImg")
    appImg.setAttribute("src", "./assets/images/2.jpg");
    let a = document.createElement("a")
    // .setAttribute("href", "https://github.com/mms211/What-Do-You-Want-To-Eat-App");
    console.log(a)
    a.className = "appLink"
    a.href = "https://github.com/mms211/What-Do-You-Want-To-Eat-App"
    a.target = "_blank"
    figure = document.getElementsByClassName("appImage")[0]
    console.log(figure)
    // figure.removeChild()
    figure.append(a)
    // a.removeChild()
    a.append(appImg)
    console.log(figure)


    notetakerTag = document.getElementById("notetakerButton");
    notetakerTag.addEventListener("click", function () {
        tabs[0].setAttribute("class", "");
        tabs[1].setAttribute("class", "is-active");
        appImg = document.getElementById("appImg").setAttribute("src", "./assets/images/3.jpg");
        tabs[2].setAttribute("class", "");

        a.href = "https://github.com/Calvinmac633/note-taker-homework"


    })
    weatherTag = document.getElementById("weatherButton");
    weatherTag.addEventListener("click", function () {
        tabs[0].setAttribute("class", "");
        tabs[1].setAttribute("class", "");
        tabs[2].setAttribute("class", "is-active");
        appImg = document.getElementById("appImg").setAttribute("src", "./assets/images/4.jpg");


        a.href = "https://calvinmac633.github.io/weather-app/"

    });
    restaurantTag = document.getElementById("restaurantButton");
    restaurantTag.addEventListener("click", function () {
        tabs[0].setAttribute("class", "is-active");
        tabs[1].setAttribute("class", "");
        tabs[2].setAttribute("class", "");
        document.getElementById("appImg").setAttribute("src", "./assets/images/2.jpg");


    })


    // function loadNoteImage(data) {
    //     const appImg = document.getElementsByClassName("appImag")[0];
    //     appImg.setAttribute("src", data[2].image)
    // }
    // function loadWeatherImage(data) {
    //     const appImg = document.getElementsByClassName("appImag")[0];
    //     appImg.setAttribute("src", data[3].image)
    // }
    // function laodRestaurantImage(data) {
    //     const appImg = document.getElementsByClassName("appImag")[0];
    //     appImg.setAttribute("src", data[1].image)
    // }


});
