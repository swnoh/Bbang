import React, { Component } from "react";
import './Footer.css';

class Footer extends Component {
  render() {
    return (
        <div className="container-fluid footer">
            <div className="col copyright">
                <p><a href="http://compactcreative.com">Made by Miruku &copy; 2018</a></p>
                <p className="footer-social">
                <a href="http://instagram.com/miruku_ottawa" target="_blank" className="fa fa-instagram fa-2x social-icon" />
                <a href="https://www.facebook.com/MirukuOttawa" target="_blank" className="fa fa-facebook-square fa-2x social-icon" />
                </p>
            </div>
        </div>
    )
  }
}

export default Footer;