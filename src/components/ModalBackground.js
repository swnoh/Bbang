import React, { Component } from 'react';
import './ModalBackground.css';
import Checkout from './Checkout'


class ModalBackground extends Component {
    components = {
        // Login: Login,
        Checkout: Checkout
    };

  render() {
    const TagName = this.components[this.props.contentComponent];

    return (
      <div className="ModalBackground" >
          <div className={"overlay " + this.props.setOpen}>
                <div>
                    <a className="ml-5 pl-5" id="top-logo" href="">ミルク Miruku</a>
                    <button className="closebtn" onClick={this.props.closeHandler}>&times;</button>
                </div>

                <div className={"overlay-content "+ this.props.setOpen}>
                    <Checkout products={this.props.products} />
                </div>
          </div>
      </div>
    )
  }
}

export default ModalBackground