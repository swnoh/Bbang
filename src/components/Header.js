import React, { Component } from "react";
import './Header.css';
import ModalBackground from './ModalBackground';
import PlaceNewOrder from './PlaceNewOrder';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, NavLink } from 'react-router-dom';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      phone: '',
      date: '',
      location: '',
      comment: '',
      isSubmitForm: false,
      headerSticky: ''
    }
  }

  static defaultProps = {
    onCart() {}
  };

  submitOrderForm = (orderDetail) => {
    
    this.setState({
      email: orderDetail.email,
      phone: orderDetail.phone,
      date: orderDetail.date,
      location: orderDetail.location,
      comment: orderDetail.comment,
      isSubmitForm: true,
    })
  }

  clearOrderForm = () => {
    this.setState({
      email: '',
      phone: '',
      date: '',
      location: '',
      comment: '',
      isSubmitForm: false,
    })

    this.props.handleModal()
    this.props.handleInitialCart()
    this.props.offCart()

    toast(<h2>Thank You!<br/><h3>Order is complete!</h3></h2>, { 
      position: toast.POSITION.TOP_CENTER,
      closeButton: false
    });

  }

  render() {

    return (
        <header className={this.props.headerSticky} >
             <nav className="navbar navbar-expand-md navbar-dark" >
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav mr-auto header-link">
                      <NavLink exact to="/">Miruku</NavLink>
                      <NavLink exact to="/">Home</NavLink>
                      <NavLink to="/about">About</NavLink>
                      <NavLink to="/shop">Shop</NavLink>
                    </ul>
                    <ul class="navbar-nav ml-auto" id="header-cart-items">
                      <li>
                        <a onClick={this.props.onCart} id="header-cart">
                          <i className="fa fa-shopping-cart" /> Cart <span className="badge"> {this.props.products.length} </span>
                        </a>
                      </li>
                      <li>
                        <a onClick={this.props.handleModal} id="checkout">Checkout</a>
                      </li>
                    </ul>
                  </div>
              </nav>

              <ModalBackground  
                  setOpen={this.props.setOpen}
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
              <ToastContainer transition={Flip} hideProgressBar={true}/>
          </header>
      )
  }
}

export default Header;

