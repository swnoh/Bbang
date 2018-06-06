import React, { Component } from "react";
import "./CartItem.css";

class CartItem extends Component {
  render() {
    const {
      imagePath,
      selectedOption1,
      selectedOption2,
      price,
      onClick
    } = this.props;
    return (
      <li className="shopping-cart-items">
        <img src={imagePath} alt={selectedOption1} />
        <div className="shopping-cart-items-info">
          <strong>{selectedOption1}</strong>
          <ul>
            <li>{selectedOption2}</li>
            <li>${price}</li>
          </ul>
        </div>
        <a onClick={onClick}>
          <i className="fa fa-trash" />
        </a>
        {/* <button className="btn btn-danger btn-xs" onClick={onClick}>X</button> */}
      </li>
      // </ul>
    );
  }
}

export default CartItem;
