import React from "react";

function SampleGraph(){
    return(
        <div className="container">
        <h2 className="text-center font-weight-bold mt-3 mb-5">AI Generated Stock Graphs</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <img src="lstm_sample.png" className="img-fluid rounded" alt="Visualization 1" />
          </div>
          <div className="col-md-6 mb-4">
            <img src="apple_sample.png" className="img-fluid rounded" alt="Visualization 2" />
          </div>
        </div>
      </div>
    )
}
export default SampleGraph;