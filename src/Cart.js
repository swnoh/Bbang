import React, { Component } from "react";
import CartItem from './CartItem';
import './Cart.css';

class Cart extends Component {
    render() {
        const Item = this.props.products.map((r, index) => (
            <CartItem key={r.id} {...r} />
        ))
        return (
            <div className="container">
                <div className="shopping-cart">
                    <div className="shopping-cart-header">
                        <i className="fa fa-shopping-cart cart-icon" />
                        <span className="badge">0</span>
                        <div className="shopping-cart-total">
                        <span className="lighter-text">Total:</span>
                        <span className="main-color-text">$2,229.97</span>
                        </div>
                    </div>
                    {Item}    
                    <a href="#" className="button">
                        Checkout
                    </a>
                </div>
            </div>
        );
    }
}

export default Cart;
