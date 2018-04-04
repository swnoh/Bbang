import React, { Component } from "react";
import './CartItem.css';

class CartItem extends Component {
  render() {
    const {imagePath, title, price} = this.props;
    return (
      <div>
        <ul className="shopping-cart-items">
          <li className="clearfix">
            <img src={imagePath} alt={title} />
            <span className="item-name">{title}</span>
            <span className="item-price">{price}</span>
            <span className="item-quantity">Quantity: 01</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default CartItem;



    //  <li class="clearfix">
    //    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg" alt="item1" />
    //    <span class="item-name">Sony DSC-RX100M III</span>
    //    <span class="item-price">$849.99</span>
    //    <span class="item-quantity">Quantity: 01</span>
    //  </li>;

