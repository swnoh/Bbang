import React, { Component } from "react";
import './Header.css';
import ModalBackground from './ModalBackground';
import PlaceNewOrder from './PlaceNewOrder';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      phone: '',
      date: '',
      location: '',
      comment: '',
      // setOpen: false,
      isSubmitForm: false,
      headerSticky: ''
    }
  }

  static defaultProps = {
    onCart() {}
  };

  listenScrollEvent = (e) => {
    e.preventDefault()
    if (window.scrollY >= window.innerHeight) {
      this.setState({
        headerSticky: 'sticky'
      })
    } else {
      this.setState({
        headerSticky: ''
      })
      if (this.props.showCart) {
        this.props.onCart()
      }
    }
  }

  handleModal = (e) => {
    e.preventDefault();
    // this.setState({ setOpen: !this.state.setOpen })
    this.props.handleCloseModal()
    // this.state.setOpen ? this.props.handleCloseModal() :
  }

  handleCloseModal = (e) => {
    e.preventDefault();
    this.setState({ setOpen: false })
  }

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

    toast(<h2>Thank You!<br/><h3>Order is complete!</h3></h2>, { 
      position: toast.POSITION.TOP_CENTER,
      closeButton: false
    });

  }

  componentWillUnmount(newProps) {
    window.removeEventListener('scroll', this.listenScrollEvent);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  render() {

    return (
         <header className={this.state.headerSticky} onScroll={this.listenScrollEvent} >
            <nav>
             {/* <nav className="navbar navbar-inverse" > */}
             <a href="http://instagram.com/miruku_ottawa" target="_blank" class="fa fa-instagram fa-2x social-icon" />
                <a href="https://www.facebook.com/MirukuOttawa" target="_blank" class="fa fa-facebook-square fa-2x social-icon" />
                <li>
                  <a onClick={this.props.onCart} id="cart">
                    <i className="fa fa-shopping-cart" /> Cart <span className="badge"> {this.props.products.length} </span>
                  </a>
                </li>

                <li>
                  <a onClick={this.props.handleModal} id="checkout">Checkout</a>
                </li>
                
                <ModalBackground  
                  setOpen={this.props.setOpen}
                  handleCloseModal={this.handleCloseModal}
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
              </nav>
              <ToastContainer transition={Flip} hideProgressBar={true}/>
          </header>
      )
  }
}

export default Header;

