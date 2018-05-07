import React, { Component } from "react";
import './Footer.css';

class Footer extends Component {
  render() {
    return (
        <div class="container-fluid footer">
            <div class="col copyright">
                <p><a href="http://compactcreative.com">Made by Miruku &copy; 2018</a></p>
                <p class="footer-social">
                <a href="http://instagram.com/miruku_ottawa" target="_blank" class="fa fa-instagram fa-2x social-icon" />
                <a href="https://www.facebook.com/MirukuOttawa" target="_blank" class="fa fa-facebook-square fa-2x social-icon" />
                </p>
            </div>
        </div>
    )
  }
}

export default Footer;