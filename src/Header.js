import React, { Component } from "react";
import './Header.css';

class Header extends Component {
  static defaultProps = {
    onCart() {}
  };
  render() {
    return <header>
        <h2>
          <a>Miruku</a>
        </h2>
        <nav>
          <li>
            <a onClick={this.props.onCart} id="cart">
              <i className="fa fa-shopping-cart" /> Cart <span className="badge">
                0
              </span>
            </a>
          </li>
          <li>
            <a>Checkout</a>
          </li>
          <li>
            <a>Login</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </nav>
      </header>;
  }
}

export default Header;

