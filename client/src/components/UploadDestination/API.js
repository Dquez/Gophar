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
        let responseConcepts = {};
        const imagesArr = images.replace(" ", "").split(",");
        app.models.predict('eee28c313d69466f836ab83287a54ed9', imagesArr).then(responses => {
                console.log(responses.outputs, 1);
                responses.outputs.forEach(response =>{
                    const nextTripParams = response.data.concepts.filter(concept=> {
                        return concept.value > 0.3;
                    });
                    nextTripParams.forEach(concept=>{
                        // if the concept name "view" for example already exists and the value is higher, then dont add the new value
                        if(!responseConcepts[concept.name] || responseConcepts[concept.name] < concept.value){
                            responseConcepts[concept.name] = concept.value
                        }
                    });
                });
                console.log(responseConcepts);
                
            },
            function (err) {
                console.error(err);
            }
            );
    }
    // );

};


// }