import React, { Component } from "react";
import './Header.css';
import ModalBackground from './ModalBackground';
import PlaceNewOrder from './PlaceNewOrder';
import NotificationSystem from 'react-notification-system'

class Header extends Component {
  constructor() {
    super();
    this.state = {
      setOpen: '',
      email: '',
      phone: '',
      date: '',
      location: '',
      comment: '',
      isSubmitForm: false,
    }

    this.handleModal=this.handleModal.bind(this)
    this.submitOrderForm = this.submitOrderForm.bind(this);
    this.clearOrderForm = this.clearOrderForm.bind(this);
  }

  static defaultProps = {
    onCart() {}
  };

  handleModal = (e) => {
    e.preventDefault();
    this.setState({ setOpen: e.target.className === 'closebtn' ? '' : 'open' })
  }

  submitOrderForm (orderDetail) {
    
    this.setState({
      email: orderDetail.email,
      phone: orderDetail.phone,
      date: orderDetail.date,
      location: orderDetail.location,
      comment: orderDetail.comment,
      isSubmitForm: true,
    })
  }

  clearOrderForm() {
    this.setState({
      email: '',
      phone: '',
      date: '',
      location: '',
      comment: '',
      setOpen: '',
      isSubmitForm: false,
    })

    this._notificationSystem.addNotification({
      title: 'Thank you!',
      message: 'Your order is complete.',
      level: 'success',
      position: 'tc'
    });
  }

  _notificationSystem= null

  componentDidMount() {
      this._notificationSystem = this.refs.notificationSystem;
  }

  render() {

    return (
        <header>
            <nav>
              <li>
                <a onClick={this.props.onCart} id="cart">
                  <i className="fa fa-shopping-cart" /> Cart <span className="badge"> 3 </span>
                </a>
              </li>

              <li>
                <a onClick={this.handleModal} id="checkout">Checkout</a>
              </li>
              
              <ModalBackground setOpen={this.state.setOpen} handleModal={this.handleModal} products={this.props.products} submitOrderForm={this.submitOrderForm}/>
              <PlaceNewOrder email={this.state.email} phone={this.state.phone} date={this.state.date} location={this.state.location} comment={this.state.comment} clearOrderForm={this.clearOrderForm} isSubmitForm={this.state.isSubmitForm}/> 
            </nav>
            <NotificationSystem ref="notificationSystem" />
        </header>
      )
  }
}

export default Header;

