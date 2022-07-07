import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '../pages/static/css/style.css';
import Logo from '../pages/static/images/logo.jpeg'

function Footer() {
  return (
    <div className="footer">
        <MDBFooter className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                <MDBCol md="6">
                    <h5 className="title"><img src={Logo} height="100px" alt='Logo' /></h5>
                </MDBCol>
                <MDBCol md="6">
                    <h5 className="title">Links</h5>
                    <ul>
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
                </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a className="footer-link" href="https://janasampanda-test.herokuapp.com/"> Janasampanda.org </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    </div>
  );
}

export default Footer;
