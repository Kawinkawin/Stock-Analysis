import React from "react";
import Navbar from '../Components/Navbar';
import Home from '../Components/Home';
import About from '../Components/About';
import CompanyList from '../Components/CompanyList';
import SampleGraph from '../Components/SampleGraph';
import Footer from '../Components/Footer';

function LandingPage() {
    return (
        <div>
            <Navbar />
            <section id="home">
                <Home />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="companyList">
                <CompanyList />
            </section>
            <section id="sampleGraph">
                <SampleGraph />
            </section>
            <Footer />
        </div>
    );
}

export default LandingPage;
