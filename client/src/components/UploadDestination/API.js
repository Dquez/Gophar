import axios from "axios";
import APIKEY from "../../keys";
const Clarifai = require('clarifai');

const app = new Clarifai.App({
    apiKey: APIKEY
   });

// predict the contents of an image by passing in a url
app.models.predict('eee28c313d69466f836ab83287a54ed9', 'https://clarifai.com/cms-assets/20180308185817/travel.jpg').then(
  function(response) {
    console.log(response);
  },
  function(err) {
    console.error(err);
  }
);