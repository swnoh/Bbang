import React, { Component } from 'react'
import './Home.css'

import NotificationSystem from 'react-notification-system'

class Home extends Component {

    constructor() {
        super()
        this.state = {
            modalview: ''
        }
    }

    _notificationSystem= null

    _addNotification =  function(event) {
        event.preventDefault();
        this._notificationSystem.addNotification({
            title: 'Thank you!',
            message: 'Your order is complete.',
            level: 'success',
            position: 'tr',
            autoDismiss: 0,
        });
      }

    componentDidMount() {
        this._notificationSystem = this.refs.notificationSystem;
    }

    render() {
        return (
            // <div className="container">
            // <div className="row">
            //     <div className="col-md-12">
            <div className="home-single-page">
                    <div id="carousel-home" className="carousel carousel-fullscreen slide carousel-fade" data-ride="carousel" 
                            data-interval="5000" data-pause="null">
                        
                        <div className="carousel-inner" role="listbox">
                            <div className="item one active">
                                <div className="overlay"></div>
                                    <div className="carousel-caption">
                                        <h1 className="super-heading">ミルク MIRUKU</h1><br/><br/>
                                        <p className="super-paragraph">FRESH, FROM SCRATCH, ORDERS ONLY </p><br/>
                                        <button className="btn btn-outline-light btn-lg">SHOP</button>
                                    </div>
                                </div>
                            <div className="item two">
                                <div className="carousel-caption">
                                <h1 className="super-heading">ミルク MIRUKU</h1><br/><br/>
                                <p className="super-paragraph">FRESH, FROM SCRATCH, ORDERS ONLY </p><br/>
                                <button className="btn btn-outline-light btn-lg">SHOP</button>
                                </div>
                            </div>
                            <div className="item three">
                                <div className="overlay"></div>
                                    <div className="carousel-caption">
                                        <h1 className="super-heading">ミルク MIRUKU</h1><br/><br/>
                                        <p className="super-paragraph">FRESH, FROM SCRATCH, ORDERS ONLY </p><br/>
                                        <button className="btn btn-outline-light btn-lg">SHOP</button>
                                    </div>
                            </div>
                            <div className="item four"> 
                                <div className="overlay"></div>
                                    <div className="carousel-caption">
                                        <h1 className="super-heading">ミルク MIRUKU</h1><br/><br/>
                                        <p className="super-paragraph">FRESH, FROM SCRATCH, ORDERS ONLY </p><br/>
                                        <button className="btn btn-outline-light btn-lg">SHOP</button>
                                    </div>
                            </div>
                            <div className="item five"> 
                                <div className="overlay"></div>
                                    <div className="carousel-caption">
                                        <h1 className="super-heading">ミルク MIRUKU</h1><br/><br/>
                                        <p className="super-paragraph">FRESH, FROM SCRATCH, ORDERS ONLY </p><br/>
                                        <button className="btn btn-outline-light btn-lg">SHOP</button>
                                    </div>
                            </div>
                        </div>

                        
                        <div className="test-style">
                            <NotificationSystem ref="notificationSystem" />
                        </div>
                    </div>

                </div>
        //         </div>
        //     </div>
        // </div>
        )
    }
}

export default Home