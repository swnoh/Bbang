import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container copyright">
          <nav className="footer-social">
            <ul>
              <li>
                <a
                  href="http://instagram.com/miruku_ottawa"
                  target="_blank"
                  className="fa fa-instagram fa-2x social-icon"
                />
              </li>
              <li>
                <a
                  href="https://www.facebook.com/MirukuOttawa"
                  target="_blank"
                  className="fa fa-facebook-square fa-2x social-icon"
                />
              </li>
            </ul>
          </nav>
          <footer>
            <p>Made by Miruku &copy; 2018</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default Footer;
