import React, { Component } from "react";
import './CartItem.css';

class CartItem extends Component {
  render() {
    const {imagePath, title, price, onClick} = this.props;
    return (
          <li className="shopping-cart-items">
            <img src={imagePath} alt={title} />
            <div className="shopping-cart-items-info">
              <strong>{title}</strong>
              <ul>
                <li>1 bottle (350ml)</li>
                <li>${price}</li>
                <li>A whole cake needs to be picked up at only 1280 Baseline Rd.</li>
              </ul>
            </div>
            <a onClick={onClick}><i class="fa fa-trash"></i></a>
            {/* <button className="btn btn-danger btn-xs" onClick={onClick}>X</button> */}
          </li>
        // </ul>
    );
  }
}

export default CartItem;
