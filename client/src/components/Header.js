import React, { Component } from "react";
import "./Header.css";
import ModalCheckout from "./ModalCheckout";
import PlaceNewOrder from "./PlaceNewOrder";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";

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
      stickyHeader: "",
      collapsed: true,
      headerSticky: ""
    };
  }

  static defaultProps = {
    onCart() {}
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
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

  listenScrollEvent = e => {
    e.preventDefault();
    if (window.scrollY >= window.innerHeight) {
      this.setState({
        headerSticky: "sticky"
      });
    } else {
      this.setState({
        headerSticky: ""
      });
      if (this.props.showCart) {
        this.props.onCart();
      }
    }
  };

  onCart = () => {
    this.props.onCart();
    this.clickClose.click();
  };

  handleModal = () => {
    this.props.handleModal();
    this.clickClose.click();
  };

  componentWillUnmount(newProps) {
    window.removeEventListener("scroll", this.listenScrollEvent);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <header
        className={
          window.location.pathname.indexOf("product") > -1 ||
          this.props.showCart
            ? "sticky"
            : this.state.headerSticky
        }
        onScroll={this.listenScrollEvent}
      >
        <nav className="navbar navbar-expand-md navbar-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
            ref={button => (this.clickClose = button)}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-collapse collapse" id="collapsibleNavbar">
            <ul className="navbar-nav mr-auto header-link">
              <NavLink to="/">Miruku</NavLink>
            </ul>
            <ul className="navbar-nav ml-auto" id="header-cart-items">
              <li>
                <a onClick={this.onCart} id="header-cart">
                  <i className="fa fa-shopping-cart" /> Cart{" "}
                  <span className="badge"> {this.props.products.length} </span>
                </a>
              </li>
              <li>
                <a onClick={this.handleModal} id="checkout">
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
