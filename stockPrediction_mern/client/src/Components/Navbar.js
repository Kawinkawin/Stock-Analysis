import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
    return (
        <nav className="navbar navbar-light navbar-expand-lg fixed-top shadow-sm bg-white">
            <a href="/" className="navbar-brand">
                <img src="logo1.jpg" alt="Logo" style={{ width: '60px', height: '50px', marginRight: '-5px' }} />
                <span className="text-success font-weight-bold ml-2">Sto</span><span className="text-danger font-weight-bold">XX</span>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navbarSupportedContent" className="collapse navbar-collapse justify-content-end">
                <ul className="navbar-nav ">
                    <li className="nav-item mr-5 p-2 ">
                        <ScrollLink to="home" className="nav-link " smooth={true} duration={500}>Home</ScrollLink>
                    </li>
                    <li className="nav-item mr-5 p-2">
                        <ScrollLink to="about" className="nav-link" smooth={true} duration={500}>About</ScrollLink>
                    </li>
                    <li className="nav-item mr-5 p-2">
                        <ScrollLink to="companyList" className="nav-link" smooth={true} duration={500}>Market</ScrollLink>
                    </li>
                    <li className="nav-item mr-5 p-2">
                        <ScrollLink to="sampleGraph" className="nav-link" smooth={true} duration={500}>Contact</ScrollLink>
                    </li>
                </ul>
                <div className="navbar-text">
                    <a href="/Login" className="btn btn-primary text-white shadow">Login</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
