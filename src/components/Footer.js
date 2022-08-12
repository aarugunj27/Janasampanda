import React from "react";
import '../pages/static/css/style.css';
import Logo from '../pages/static/images/logo.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer id="footer" className="footer-1">
        <div className="main-footer widgets-dark typo-light">
            <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-3">
                    <img className="logo" src={Logo} alt='footer-img'/>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-3">
                    <div className="widget subscribe no-box">
                        <h5 className="widget-title">COMPANY NAME<span></span></h5>
                        <p>About the company, little discription will goes here.. </p>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-3">
                    <div className="widget no-box">
                        <h5 className="widget-title">Company<span></span></h5>
                        <ul className="thumbnail-widget">
                            <li>
                                <div className="thumb-content"><a href="/">Home</a></div>
                            </li>
                            <li>
                                <div className="thumb-content"><a href="/about">About</a></div>
                            </li>
                            <li>
                                <div className="thumb-content"><a href="/work">Our Work</a></div>
                            </li>
                            <li>
                                <div className="thumb-content"><a href="/gallery">Gallery</a></div>
                            </li>
                            <li>
                                <div className="thumb-content"><a href="/donate">Donate</a></div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-3">
                    <div className="widget no-box">
                        <h5 className="widget-title">Suport<span></span></h5>
                        <ul className="thumbnail-widget">
                            <li>
                                <div className="thumb-content"><a href="/contact">Contact</a></div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            </div>
        </div>

        <div className="footer-copyright">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>Copyright Company Name © 2022. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
