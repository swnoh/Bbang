import React, { Component } from 'react';
import './ModalBackground.css';
import Checkout from './Checkout'


class ModalBackground extends Component {

    render() {
        return (
        <div className="ModalBackground" >
            <div className={"overlay " + this.props.setOpen}>
                    <div>
                        <a className="ml-5 pl-5" id="top-logo" href="">ミルク Miruku</a>
                        <button className="closebtn" onClick={this.props.handleModal}>&times;</button>
                    </div>

                    <div className={"overlay-content "+ this.props.setOpen}>
                        <Checkout products={this.props.products} submitOrderForm={this.props.submitOrderForm}/>
                    </div>
            </div>
        </div>
        )
    }
}

export default ModalBackground