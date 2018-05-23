import React, { Component } from "react";
import "./Header.css";
import ModalCheckout from "./ModalCheckout";
import PlaceNewOrder from "./PlaceNewOrder";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, NavLink } from "react-router-dom";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      phone: "",
      date: "",
      location: "",
      comment: "",
      isSubmitForm: false,
      stickyHeader: ""
    };
  }

  static defaultProps = {
    onCart() {}
  };

  submitOrderForm = orderDetail => {
    this.setState({
      email: orderDetail.email,
      phone: orderDetail.phone,
      date: orderDetail.date,
      location: orderDetail.location,
      comment: orderDetail.comment,
      isSubmitForm: true
    });
  };

  clearOrderForm = () => {
    this.setState({
      email: "",
      phone: "",
      date: "",
      location: "",
      comment: "",
      isSubmitForm: false
    });

    this.props.handleModal();
    this.props.handleInitialCart();
    this.props.offCart();

    toast(
      <div>
        <h2>Thank You!</h2>
        <h3>Order is complete!</h3>
      </div>,
      {
        position: toast.POSITION.TOP_CENTER,
        closeButton: false
      }
    );
  };

  render() {
    return (
      <header className={this.props.stickyHeader}>
        <nav className="navbar navbar-expand-md navbar-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav mr-auto header-link">
              <NavLink exact to="/">
                Miruku
              </NavLink>
              <NavLink exact to="/">
                Home
              </NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/shop">Shop</NavLink>
            </ul>
            <ul className="navbar-nav ml-auto" id="header-cart-items">
              <li>
                <a onClick={this.props.onCart} id="header-cart">
                  <i className="fa fa-shopping-cart" /> Cart{" "}
                  <span className="badge"> {this.props.products.length} </span>
                </a>
              </li>
              <li>
                <a onClick={this.props.handleModal} id="checkout">
                  Checkout
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <ModalCheckout
          CheckoutOpen={this.props.CheckoutOpen}
          handleModal={this.props.handleModal}
          submitOrderForm={this.submitOrderForm}
          products={this.props.products}
          handleRemoveCart={this.props.handleRemoveCart}
        />

        <PlaceNewOrder
          email={this.state.email}
          phone={this.state.phone}
          date={this.state.date}
          location={this.state.location}
          comment={this.state.comment}
          clearOrderForm={this.clearOrderForm}
          isSubmitForm={this.state.isSubmitForm}
        />
        <ToastContainer transition={Flip} hideProgressBar={true} />
      </header>
    );
  }
}

export default Header;
