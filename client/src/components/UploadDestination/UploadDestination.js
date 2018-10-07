import React from "react";
import API from "./API";
import axios from 'axios';

const UploadDestination = props => {
  const myFunc = () => {
    const images = document.getElementById('imgurl').value;
    API.postImages(images)
    // .then(data => {
      // console.log(data, "data");
    }
    // );
  // }

  return (
    <div className="container">
      <div className="row">
          <label className="col-sm-3 control-label">
            Select multiple pictures, separated by commas.
          </label>
            <div className="col-md-6">
              <span className="btn btn-default btn-file">
              </span>
              <input type="text" id="imgurl" placeholder="Image URL" size="40"/>
              {/* <input id="input-2" name="input2[]" type="file" placeholder="Filename" className="file" multiple data-show-upload="true" data-show-caption="true" /> */}
            </div>
            <div className="col-md-3">
              <button onClick={myFunc} type="submit" className="btn btn-md btn-primary mb-2">
                  Submit
              </button>
          </div>
      </div>
    </div>
  )
}   
export default UploadDestination;