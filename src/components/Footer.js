import React from "react";
import { MDBRow } from "mdbreact";
import '../pages/static/css/style.css';
import Logo from '../pages/static/images/logo.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <div className="footer">
        <img className="footer-img" src={Logo} alt='Logo' />
        <div className="footer-content">
            Inset text here
        </div>
        <MDBRow>
            <ul>
                <h5 className="title">Links</h5>
                <li className="list-unstyled">
                    <a className="footer-link" href="/">Home</a>
                </li>
                <li className="list-unstyled">
                    <a className="footer-link" href="/about">About Us</a>
                </li>
                <li className="list-unstyled">
                    <a className="footer-link" href="/contact">Contact</a>
                </li>
                <li className="list-unstyled">
                    <a className="footer-link" href="/gallery">Gallery</a>
                </li>
                <li className="list-unstyled">
                    <a className="footer-link" href="/donate">Donate</a>
                </li>
            </ul>
        </MDBRow>
        <div itemID="copyright" className="footer-copyright text-center py-3">
            &copy; {new Date().getFullYear()} Copyright: <a className="footer-link" href="/"> Janasampanda.org </a>
        </div>
    </div>
  );
}

export default Footer;
