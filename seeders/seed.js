const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/imageperformance", {
  useNewUrlParser: true
});

const imageSeed = [
  {
    description: "Calvin",
    image: "/assets/images/1.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Restaurant App",
    image: "/assets/images/2.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Notetaker App",
    image: "/assets/images/3.jpg",
    rating: 0,
    date: new Date(Date.now())
  },
  {
    description: "Weather App",
    image: "/assets/images/4.jpg",
    rating: 0,
    date: new Date(Date.now())
  }
];

db.Image.deleteMany({})
  .then(() => db.Image.collection.insertMany(imageSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
