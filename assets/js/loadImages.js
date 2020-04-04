// loadImages();
// loadAppImages();

// function createEl(htmlString = "", className) {
//   const el = document.createElement(htmlString);
//   if (className) {
//     el.setAttribute("class", className);
//   }
//   return el;
// }

// function initLazyImages() {
//   // Enter your code here
//   const images = document.querySelectorAll(".lazy");

//   const observer = new IntersectionObserver(images => {
//     images.forEach(image => {
//       if (image.isIntersecting) {
//         observer.unobserve(image.target);
//         image.target.src = image.target.dataset.src;
//         console.log("LOADED A NEW IMAGE")
//       }
//     })
//   })

//   images.forEach(image => observer.observe(image));

// }

// function loadImages() {
//   fetch("/api/images")
//     .then(res => res.json())
//     .then(data => populateImages(data))
//     // .then(data => createAppImage(data))
//     .then(() => initLazyImages());
// }

// function loadImages() {

//   const appContainer = document.getElementsByClassName("appImage")[0];

//   const appImg = createEl("img", "appImag");
//   appImg.setAttribute("src", "../images/2.jpg")
//   console.log(appContainer);
//   console.log(appImg)
//   appContainer.appendChild(appImg);

//   buttonClicked = document.getElementsByClassName("is-active");
//   console.log(buttonClicked);


// }



