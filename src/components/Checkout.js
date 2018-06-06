import React, { Component } from "react";
import "./Checkout.css";
import CartItem from "./CartItem";
import { confirmAlert } from "react-confirm-alert";

const CartList = ({ products, handleRemoveCart }) => {
  const cartItem = products.map(product => {
    return (
      <CartItem
        key={product.id}
        {...product}
        onClick={() => handleRemoveCart(product.id)}
      />
    );
  });

  return (
    <div className="shopping-cart-body">
      <ul>{cartItem}</ul>
    </div>
  );
};

const CartTotal = ({ products }) => {
  let totalPrice = products
    .map(product => {
      let priceArr = 0;
      return (priceArr += product.price);
    })
    .reduce((a, b) => a + b, 0);

  return (
    <div className="order-shopping-cart-total">
      <span className="lighter-text">Total: </span>
      <span className="main-color-text">$ {totalPrice}</span>
    </div>
  );
};

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      selectedLocation: "location1",
      pickupLocation: "",
      disabled: true
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    const orderForm = event.target;
    let SELECTED_LOCATION = "";

    switch (this.state.selectedLocation) {
      case "location1":
        SELECTED_LOCATION = "1280 Baseline Rd, Ottawa";
        break;
      case "location2":
        SELECTED_LOCATION = "319 Rideau st, Ottawa";
        break;
      case "location3":
        SELECTED_LOCATION = this.state.pickupLocation;
        break;
      default:
        SELECTED_LOCATION = "";
    }

    const submitOrder = {
      email: orderForm[0].value,
      phone: orderForm[1].value,
      date: orderForm[2].value,
      location: SELECTED_LOCATION,
      comment: orderForm[8].value
    };

    confirmAlert({
      title: "Confirm to order",
      message: "Are you sure to proceed this?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            this.props.submitOrderForm(submitOrder);
            orderForm.reset();
          }
        },
        {
          label: "No",
          onClick: () => null
        }
      ]
    });
  };

  handleOptionChange = event => {
    this.setState({
      selectedLocation: event.target.value
    });

    if (event.target.value === "location3") {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  };

  handleCustomOption = event => {
    this.setState({
      pickupLocation: event.target.value
    });
  };

  render() {
    return (
      <div className="container-fluid checkout">
        <div
          className="box col-sm-12 col-md-5 col-xl-4"
          id="order-shopping-cart"
        >
          <div className="box-title">
            <h1>Shopping Bag</h1>
          </div>
          <CartTotal products={this.props.products} />
          {this.props.products.length > 0 && (
            <CartList
              products={this.props.products}
              handleRemoveCart={this.props.handleRemoveCart}
            />
          )}
          {this.props.products.length === 0 && (
            <div className="shopping-cart-empty">
              <h1>Cart is empty</h1>
            </div>
          )}
        </div>

        <div className="box col-sm-12 col-md-7 col-xl-6" id="checkout-form">
          <div className="box-title">
            <h1>Checkout</h1>
          </div>

          <div className="form">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group row">
                <label htmlFor="email-input" className="col-2 col-form-label">
                  Email
                </label>
                <div className="col-10">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="awesome@miruku.com"
                    name="email-input"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="tel-input" className="col-2 col-form-label">
                  Phone
                </label>
                <div className="col-10">
                  <input
                    className="form-control"
                    type="tel"
                    placeholder="1-(555)-555-5555"
                    id="tel-input"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="datetime-local-input"
                  className="col-2 col-form-label"
                >
                  Date
                </label>
                <div className="col-10">
                  <input
                    className="form-control"
                    type="month"
                    placeholder="2011-08-19T13:45:00"
                    id="datetime-local-input"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="time-input" className="col-2 col-form-label">
                  Time
                </label>
                <div className="col-10">
                  <select className="form-control">
                    <option disabled selected value>
                      {" "}
                      -- select time --{" "}
                    </option>
                    <option>11am</option>
                    <option>12pm</option>
                    <option>1pm</option>
                    <option>2pm</option>
                    <option>3pm</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <legend className="col-form-legend col-12">
                  Pick-up or Delivery Location
                </legend>
                <div className="col-12">
                  <div className="form-check">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios1"
                        value="location1"
                        checked={this.state.selectedLocation === "location1"}
                        onChange={this.handleOptionChange}
                      />
                      Pick-up at 1280 Baseline Rd, Ottawa
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios2"
                        value="location2"
                        checked={this.state.selectedLocation === "location2"}
                        onChange={this.handleOptionChange}
                      />
                      Pick-up at 319 Rideau st, Ottawa
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios3"
                        value="location3"
                        checked={this.state.selectedLocation === "location3"}
                        onChange={this.handleOptionChange}
                      />
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Delivery at"
                        id="location-text-input"
                        onChange={this.handleCustomOption}
                        disabled={this.state.disabled}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="exampleTextarea" />
                <div className="col-12">
                  <textarea
                    className="form-control"
                    id="exampleTextarea"
                    rows="3"
                  />
                </div>
              </div>
              <button type="submit" id="submitButton" className="btn btn-block">
                Submit
              </button>
              <br />
              <br />
              <p>*Please allow us few days notice for any order.</p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Checkout;
