import React from "react";
import API from "./API";

const UploadDestination = props => {
  const myFunc = () => {
    const images = document.getElementById('input-2')
    console.log(images.files);
  }

  return (
    <div className="container">
      <div className="row">
          <label className="col-sm-3 control-label">
            Select multiple pictures if you'd like
          </label>
            <div className="col-md-6">
              <span className="btn btn-default btn-file">
                <input id="input-2" name="input2[]" type="file" className="file" multiple data-show-upload="true" data-show-caption="true" />
              </span>
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