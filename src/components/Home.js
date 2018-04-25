import React, { Component } from 'react'
import './Home.css'


class Home extends Component {

    constructor() {
        super()
        this.state = {
            modalview: ''
        }
    }

    effect(event) {
        event.preventDefault();
        this.setState({
            modalview: 'modalview'
        })
    }

    render() {
        return (
            // <div className="container">
            // <div className="row">
            //     <div className="col-md-12">
                    <div id="carousel-home" class="carousel carousel-fullscreen slide carousel-fade" data-ride="carousel" 
                            data-interval="5000" data-pause="null">
                        
                        <div className="carousel-inner" role="listbox">
                            <div className="item one active">
                                <div className="overlay"></div>
                                    <div className="carousel-caption">
                                        <h1 className="super-heading">ミルク MIRUKU</h1><br/><br/>
                                        <p className="super-paragraph">FRESH, FROM SCRATCH, ORDERS ONLY </p><br/>
                                        <button onClick={this.effect.bind(this)} className="btn btn-outline-light btn-lg">SHOP</button>
                                    </div>
                                </div>
                            <div className="item two">
                                <div className="carousel-caption">
                                <h1 className="super-heading">ミルク MIRUKU</h1><br/><br/>
                                <p className="super-paragraph">FRESH, FROM SCRATCH, ORDERS ONLY </p><br/>
                                <button onClick={this.effect.bind(this)} className="btn btn-outline-light btn-lg">SHOP</button>
                                </div>
                            </div>
                            <div className="item three">
                                <div className="overlay"></div>
                                    <div className="carousel-caption">
                                        <h1 className="super-heading">ミルク MIRUKU</h1><br/><br/>
                                        <p className="super-paragraph">FRESH, FROM SCRATCH, ORDERS ONLY </p><br/>
                                        <button onClick={this.effect.bind(this)} className="btn btn-outline-light btn-lg">SHOP</button>
                                    </div>
                            </div>
                            <div className="item four"> 
                                <div className="overlay"></div>
                                    <div className="carousel-caption">
                                        <h1 className="super-heading">ミルク MIRUKU</h1><br/><br/>
                                        <p className="super-paragraph">FRESH, FROM SCRATCH, ORDERS ONLY </p><br/>
                                        <button onClick={this.effect.bind(this)} className="btn btn-outline-light btn-lg">SHOP</button>
                                    </div>
                            </div>
                            <div className="item five"> 
                                <div className="overlay"></div>
                                    <div className="carousel-caption">
                                        <h1 className="super-heading">ミルク MIRUKU</h1><br/><br/>
                                        <p className="super-paragraph">FRESH, FROM SCRATCH, ORDERS ONLY </p><br/>
                                        <button onClick={this.effect.bind(this)} className="btn btn-outline-light btn-lg">SHOP</button>
                                    </div>
                            </div>
                        </div>

                        {/* <a className="left carousel-control" href="#carousel-home" role="button" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#carousel-home" role="button" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a> */}

                        <div className="container notice-content">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1>* PICK-UP / DELIVERY *</h1>

                                    <h2>PICK-UP AVAILABLE AT (BY APPOINTMENT)</h2>

                                    <blockquote><p>1280 Baseline Rd, Ottawa</p>
                                                <p>Sushi Kan Parking Lot </p>
                                                <p>Mon-Sat, 9am to 9pm </p>
                                                </blockquote>
                                    <h2>DELIVERY (BY APPOINTMENT)</h2>
                                    <blockquote><p>All menu is available to deliver, 
                                        but whole cake has to be picked up.</p></blockquote>
                                </div>
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