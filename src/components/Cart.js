import React, { Component } from "react";
import CartItem from './CartItem';
import './Cart.css';

const CartList = ({products, handleRemoveCart}) => {
    const cartItem = products.map((product) => {
        return (<CartItem key={product.id} {...product} onClick={()=>handleRemoveCart(product.id)}/>)
    })

    return (
        <div className="shopping-cart-body">
            <ul>{cartItem}</ul>
        </div>
    )
}

const CartTotal = ({products}) => {
    let priceArr = 0;

    let totalPrice = products.map((product) => {
        return priceArr += product.price;
    }).reduce((a, b) => a + b, 0);

    return (
        <div className="shopping-cart-total">
            <span className="lighter-text">Total: </span>
            <span className="main-color-text">$ {totalPrice}</span>
        </div>
    )
}

class Cart extends Component {
    constructor(props){
        super()

        this.state = {
            products: []
        }
    }

    handleRemoveCartItem() {

    }

    handleTotal() {

    }

    render() {
        const {showCart, products, handleRemoveCart} = this.props;
        return (
            <div className={showCart ? "shopping-cart showCart":"shopping-cart" }>
                <div className="shopping-cart-header">
                    {/* <a onClick={this.props.onCart} id="cart-close"><i className="fa fa-angle-double-right" /></a> */}
                    <a onClick={this.props.onCart} id="cart-close"><button className="closebtn-cart">&times;</button></a>
                    <h2>Shopping Cart</h2>
                </div>
                {products.length > 0 && (
                    <div className="shopping-cart-content">
                        <CartList products={products} handleRemoveCart={handleRemoveCart}/>
                        <div className="shopping-cart-footer">
                            <CartTotal products={products}/>
                            <button className="btn btn-danger btn-block button-checkout" onClick={this.props.handleOpenModal} >Checkout</button>
                        </div>
                    </div>
                )}

                {products.length === 0 && (
                    <div className="shopping-cart-empty">
                        <h1>Cart is empty</h1>
                    </div>
                )}
            </div>
        );
    }
}

export default Cart;