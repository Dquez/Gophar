import axios from "axios";
import APIKEY from "../../keys";
const Clarifai = require('clarifai');

const app = new Clarifai.App({
    apiKey: APIKEY
});

export default {
    postImages(images) {
        // return axios.post("/upload", images=> { 
        // predict the contents of an image by passing in a url
        // console.log(image[0].name);
        const imagesArr = images.split(",");
        app.models.predict('eee28c313d69466f836ab83287a54ed9', imagesArr).then(
            function (response) {
                console.log(response);
            },
            function (err) {
                console.error(err);
            }
            );
    }
    // );

};


// }