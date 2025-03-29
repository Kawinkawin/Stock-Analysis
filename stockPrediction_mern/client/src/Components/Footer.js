import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css';// Custom styles

function Footer() {
  return (
    <div>
      {/* Contact Section */}
      <div id="contact" className="footer-top py-5 text-center text-md-left">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <h5 className="footer-heading">Stoxx 101</h5>
              <ul className="contact-info list-unstyled">
                <li>
                  <Link to="#" className="text-secondary footer-link">
                    stoxx@invest.works
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-secondary footer-link">
                    +91 987625431
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="footer-heading">Our Guidelines</h5>
              <ul className="links list-unstyled">
                <li>
                  <Link to="#" className="text-secondary footer-link">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-secondary footer-link">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-secondary footer-link">
                    Discover
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6">
              <h5 className="footer-heading">Our Address</h5>
              <p className="text-secondary">
                <i className="fa-solid fa-location-dot me-2" />
                123 xx street, xx city
              </p>
              <ul className="social-links list-inline">
                <li className="list-inline-item">
                  <Link to="#" className="footer-social">
                    <i className="fa-brands fa-instagram" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="footer-social">
                    <i className="fa-brands fa-facebook" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="footer-social">
                    <i className="fa-brands fa-twitter" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="footer-bottom py-4 text-white">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7 text-center text-md-left">
              <p className="mb-0">© 2024 All rights reserved - Stoxx</p>
            </div>
            <div className="col-md-5 text-center text-md-right">
              <p className="mb-0">Landing Page</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
