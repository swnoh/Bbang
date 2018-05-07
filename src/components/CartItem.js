import React, { Component } from "react";
import './CartItem.css';

class CartItem extends Component {
  render() {
    const {imagePath, title, price, onClick} = this.props;
    return (
      <div>
        <ul className="shopping-cart-items">
          <li>
            <button className="btn btn-danger btn-xs" onClick={onClick}>X</button>
            <img src={imagePath} alt={title} />
            <span className="item-name">{title}</span>
            <span className="item-price">${price}</span>
            <span className="item-quantity">Quantity: 01</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default CartItem;
