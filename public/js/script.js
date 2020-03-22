// function sendMail() {
//     var link = "mailto:calvinmac633@gmail.com"
//             //  + "?cc=myCCaddress@example.com"
//              + "&subject=" + escape("Message from profile")
//              + "&body=" + escape(document.getElementById('exampleInputEmail1').value)
//     ;

//     window.location.href = link;
// }
var bulmaCarousel = require("bulma-carousel");

// Initialize all elements with carousel class.
const carousels = bulmaCarousel.attach('.carousel', options);

// To access to bulmaCarousel instance of an element
const element = document.querySelector('#carousel');
if (element && element.bulmaCarousel) {
	// bulmaCarousel instance is available as element.bulmaCarousel
}
bulmaCarousel.attach('#carousel', {
    slidesToScroll: 1,
    slidesToShow: 4
});
$(".button").click(function() {
    console.log("clickeeeddd")
    $(".box").fadeOut("slow")
})