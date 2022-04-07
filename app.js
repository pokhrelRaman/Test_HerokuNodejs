const express = require("express");
const app = express();
const cloudinary = require("cloudinary").v2;
const bodyParser = require('body-parser');

// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// cloudinary configuration
cloudinary.config({
  cloud_name: "dasdjhiabbrywi",
  api_key: "236634324393164",
  api_secret: "LGxoLkMZle3afYJgqUQq-1u4duA"
});

app.get("/", (request, response) => {
  response.json({ message : 'Server response yei ho' } );
});

// image upload API
app.post("/image-upload", (request, response) => {
    // collected image from a user
    const data = {
      image: request.body.image,
    }

    // upload image here
    cloudinary.uploader.upload(data.image)
    .then((result) => {
      response.status(200).send({
        message: "success",
        result,
      });
    }).catch((error) => {
      response.status(500).send({
        message: "failure",
        error,
      });
    });
    
});

module.exports = app;