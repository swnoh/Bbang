import React, { Component } from "react";
import CartItem from './CartItem';
import './Cart.css';

const CartList = ({products, handleRemoveCart}) => {
    const cartItem = products.map((product) => {
        return (<CartItem key={product.id} {...product} onClick={()=>handleRemoveCart(product.id)}/>)
    })

    return (
        <div className="shopping-cart-body">{cartItem}</div>
    )
}

const CartTotal = ({products}) => {
    let totalPrice = 0;
    totalPrice = products.map((product) => {
        return totalPrice += parseInt(product.price);
    })

    return (
        <div className="shopping-cart-header">
            {/* <i className="fa fa-shopping-cart cart-icon" />
            <span className="badge">5</span> */}
            <div className="shopping-cart-total">
                <span className="lighter-text">Total: </span>
                <span className="main-color-text">${products.length}</span>
            </div>
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
                <a onClick={this.props.onCart} id="cart"><i className="fa fa-angle-double-right" /></a>
                {products.length > 0 && (
                    <div >
                        <CartTotal products={products}/>
                        <CartList products={products} handleRemoveCart={handleRemoveCart}/>
                        <button className="btn btn-danger btn-block" onClick={this.props.handleOpenModal} >Checkout</button>
                    </div>
                )}

                {products.length === 0 && (
                    <div >
                        <CartTotal products={products}/> <h1>Cart is empty</h1>
                    </div>
                )}
            </div>
        );
    }
}

export default Cart;
