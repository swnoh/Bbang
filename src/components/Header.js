import React, { Component } from "react";
import './Header.css';
import ModalBackground from './ModalBackground';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      setOpen: '',
      contentComponent: 'Checkout'
    }
  }

  static defaultProps = {
    onCart() {}
  };

  openHandler = (e) => {
    e.preventDefault();
    this.setState({
      setOpen: 'open',
      // contentComponent: e.target.id
    })
  }

  closeHandler = (e) => {
    e.preventDefault();
    this.setState({
      setOpen: ''
    })
  }

  render() {
    const contentName = this.state.contentComponent

    return <header>
        <h2>ミルク MIRUKU</h2>
        <nav>
          <li>
            <a onClick={this.props.onCart} id="cart">
              <i className="fa fa-shopping-cart" /> Cart <span className="badge">
                0
              </span>
            </a>
          </li>
          <li>
            <a onClick={this.openHandler.bind(this)} id="checkout">Checkout</a>
          </li>
          <li>
            <a>Login</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </nav>
        <ModalBackground contentComponent={contentName} setOpen={this.state.setOpen} closeHandler={this.closeHandler.bind(this)} />
      </header>;
  }
}

export default Header;

