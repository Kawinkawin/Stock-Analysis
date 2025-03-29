import React from 'react';
import {Link} from 'react-router-dom';

function Home(){
    return (
        <section id="home" className="bg-light mt-5">
            <div className="container ">
                <div className="row">
                    <div className="col-lg-6 order-2 order-lg-1 mt-5">
                        <h1><b>Stock Forecast</b></h1>
                        <p className="lead" style={{ fontSize: '22px' }}>&bull; Experience the future of investment with our advanced AI and ML-powered algorithms, delivering precise forecasts and actionable recommendations.</p>
                        <p className="lead" style={{ fontSize: '22px' }}>&bull; Elevate your investment strategy with our cutting-edge stock price prediction platform</p>
                        <p className="lead" style={{ fontSize: '22px' }}>&bull; Join us today and revolutionize your trading experience. Make informed decisions with confidence.</p>
                        <p><Link to="/Signup" className="btn btn-primary shadow mr-2 ">Get Started</Link></p>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 mt-4"><img src="Ai.jpeg" alt="landingimage" className="img-fluid" /></div>
                </div>
            </div>
        </section>
    );   
}

export default Home;
