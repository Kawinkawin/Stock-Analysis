
import React from "react";
function About(){
return(
<div className="service">
  <h2 className="text-center mt-5"><u><b>Services We Provide</b></u></h2>
  <p className="text-muted mb-5 text-center">We leverage AI and ML to provide accurate stock predictions.</p>
  <div className="row ">
    <div className="col-sm-6 col-lg-4 mb-3 ">
      <div className="service-box shadow p-4 mb-5 bg-white rounded">
        <i className="fa-solid fa-chart-line " />
        <h5>Accurate Predictions</h5>
        <p className="text-muted">Utilizing advanced machine learning algorithms, we provide precise forecasts for various stocks  trends.</p>
      </div>
    </div>
    <div className="col-sm-6 col-lg-4 mb-3">
      <div className="service-box shadow p-4 mb-5 bg-white rounded">
        <i className="fa-solid fa-tower-cell" />
        <h5>Real-Time Updates</h5>
        <p className="text-muted">Stay informed with timely updates and insights on market changes, ensuring you're always ahead of the curve.</p>
      </div>
    </div>
    <div className="col-sm-6 col-lg-4 mb-3">
      <div className="service-box shadow p-4 mb-5 bg-white rounded">
        <i className="fa-solid fa-gear" />
        <h5>Customizable Alerts</h5>
        <p className="text-muted">Set personalized alerts for specific stocks or market conditions, so you never miss out on key opportunities.</p>
      </div>
    </div>   
  </div>
  <div className="row">
    <div className="col-sm-6 col-lg-4 mb-3">
      <div className="service-box shadow p-4 mb-3 bg-white rounded">
        <i className="fa-solid fa-shield-halved" />
        <h5>Risk Management Tools</h5>
        <p className="text-muted">Gain access to management tools for informed investment decisions and portfolio protection.</p>
      </div>
    </div>
    <div className="col-sm-6 col-lg-4 mb-3">
      <div className="service-box shadow p-4 mb-3 bg-white rounded">
        <i className="fa-solid fa-magnifying-glass-chart" />
        <h5>Performance Tracking</h5>
        <p className="text-muted">Track investment performance, evaluate prediction accuracy, and optimize trading strategies over time.</p>
      </div>
    </div>
    <div className="col-sm-6 col-lg-4 mb-3">
      <div className="service-box shadow p-4 mb-3 bg-white rounded">
        <i className="fa-solid fa-phone-volume" />
        <h5>Responsive Customer Support</h5>
        <p className="text-muted">Count on our dedicated support team for a seamless, hassle-free experience, guiding you at every step.</p>
      </div>
    </div>
  </div> 
</div>
)
}
export default About;
