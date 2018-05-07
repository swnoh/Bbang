import React, { Component } from 'react';
import './Checkout.css';
import CartItem from './CartItem';
import Cart, {CartList} from './Cart';

class Checkout extends Component {
    
    constructor() {
        super()
        this.state = {
            selectedLocation: 'location1',
            pickupLocation: '',
            disabled: true
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        let SELECTED_LOCATION = '';

        switch (this.state.selectedLocation) {
            case 'location1':
                SELECTED_LOCATION = '1280 Baseline Rd, Ottawa';
                break;

            case 'location2':
                SELECTED_LOCATION = '319 Rideau st, Ottawa';
                break;
            case 'location3':
                SELECTED_LOCATION = this.state.pickupLocation;
                break;
        }

        const submitOrder = {
            email: event.target[0].value,
            phone: event.target[1].value,
            date: event.target[2].value,
            location: SELECTED_LOCATION,
            comment: event.target[7].value,
        }

        this.props.submitOrderForm(submitOrder);
        event.target.reset();
    }

    handleOptionChange = (event) => {
        this.setState({
            selectedLocation: event.target.value
        })

        if(event.target.value === 'location3') {
            this.setState({disabled: false})
        } else {
            this.setState({disabled: true})
        }
    }

    handleCustomOption = (event) => {
        this.setState({
            pickupLocation: event.target.value
        })
    }

    render () {  
        const cartItem = this.props.products.map((product) => {
            return (<CartItem key={product.id} {...product} onClick={()=>this.props.handleRemoveCart(product.id)}/>)
        })

        return (
        <div className="container-fluid">
            <div className="box col-6" id="order-shopping-cart">
                <div className="box-title">
                    <h1>Cart</h1>
                </div>

                <div className="title">
                    Shopping Bag
                </div>  
                {cartItem}
            </div>

            
            <div className="box col-5">
                <div className="box-title">
                    <h1>Checkout</h1>
                </div>

                <div className="form" id="checkout-form">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label htmlFor="email-input" className="col-2 col-form-label">Email</label>
                            <div className="col-10">
                                <input  className="form-control" type="email" 
                                        placeholder="awesome@miruku.com" name="email-input" required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="tel-input" className="col-2 col-form-label">Phone</label>
                            <div className="col-10">
                                <input  className="form-control" type="tel" 
                                        placeholder="1-(555)-555-5555" id="tel-input"  />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="datetime-local-input" className="col-2 col-form-label">Date and time</label>
                            <div className="col-10">
                                <input  className="form-control" type="datetime-local" 
                                        placeholder="2011-08-19T13:45:00" id="datetime-local-input"  />
                            </div>
                        </div>
                        <div className="form-group row">
                            <legend className="col-form-legend col-12">Pick-up or Delivery Location</legend>
                            <div className="col-12">
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input  className="form-check-input" type="radio" 
                                                name="gridRadios" id="gridRadios1" value="location1" 
                                                checked={this.state.selectedLocation === 'location1'}
                                                onChange={this.handleOptionChange} />
                                        Pick-up at 1280 Baseline Rd, Ottawa
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input  className="form-check-input" type="radio" 
                                                name="gridRadios" id="gridRadios2" value="location2"
                                                checked={this.state.selectedLocation === 'location2'}
                                                onChange={this.handleOptionChange} />
                                        Pick-up at 319 Rideau st, Ottawa
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input  className="form-check-input" type="radio" 
                                                name="gridRadios" id="gridRadios3" value="location3"
                                                checked={this.state.selectedLocation === 'location3'}
                                                onChange={this.handleOptionChange} />
                                        <input  className="form-control" type="text"
                                                placeholder="Delivery at" id="location-text-input" 
                                                onChange={this.handleCustomOption} 
                                                disabled={this.state.disabled} />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleTextarea"></label>
                            <div className="col-12">
                                <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
                            </div>
                        </div>
                        <button type="submit" id="submitButton" className="btn btn-block">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        
    )
    }
}
export default Checkout