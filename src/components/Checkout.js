import React from 'react';
import './Checkout.css';


const Checkout = () => {

    return (   
      <div className="container-fluid">
        <div className="box col-6" id="order-shopping-cart">
            <div className="box-title">
                <h1>Cart</h1>
            </div>

            <div class="title">
                Shopping Bag
            </div>
            
            <div class="item">
                <div class="buttons">
                <span class="delete-btn"></span>
                <span class="like-btn"></span>
                </div>
            
                <div class="image">
                <img src="https://mirukuottawacom.files.wordpress.com/2018/03/27574848_150206438998299_3902543061946728448_n.jpg?w=476&h=476&crop=1" alt="" />
                </div>
            
                <div class="description">
                <span>Common Projects</span>
                <span>Bball High</span>
                <span>White</span>
                </div>
            
                <div class="quantity">
                <button class="plus-btn" type="button" name="button">
                    <img src="https://designmodo.com/demo/shopping-cart/plus.svg" alt="" />
                </button>
                <input type="text" name="name" value="1" />
                <button class="minus-btn" type="button" name="button">
                    <img src="https://designmodo.com/demo/shopping-cart/minus.svg" alt="" />
                </button>
                </div>
            
                <div class="total-price">$549</div>
            </div>
            
            <div class="item">
                <div class="buttons">
                <span class="delete-btn"></span>
                <span class="like-btn"></span>
                </div>
            
                <div class="image">
                <img src="https://mirukuottawacom.files.wordpress.com/2017/10/20151209-main.jpg?w=476&h=476&crop=1" alt=""/>
                </div>
            
                <div class="description">
                <span>Maison Margiela</span>
                <span>Future Sneakers</span>
                <span>White</span>
                </div>
            
                <div class="quantity">
                <button class="plus-btn" type="button" name="button">
                    <img src="https://designmodo.com/demo/shopping-cart/plus.svg" alt="" />
                </button>
                <input type="text" name="name" value="1" />
                <button class="minus-btn" type="button" name="button">
                    <img src="https://designmodo.com/demo/shopping-cart/minus.svg" alt="" />
                </button>
                </div>
            
                <div class="total-price">$870</div>
            </div>
            
            <div class="item">
                <div class="buttons">
                <span class="delete-btn"></span>
                <span class="like-btn"></span>
                </div>
            
                <div class="image">
                <img src="https://mirukuottawacom.files.wordpress.com/2018/01/img_6317.jpg?w=300&h=290" alt="" />
                </div>
            
                <div class="description">
                <span>Our Legacy</span>
                <span>Brushed Scarf</span>
                <span>Brown</span>
                </div>
            
                <div class="quantity">
                <button class="plus-btn" type="button" name="button">
                    <img src="https://designmodo.com/demo/shopping-cart/plus.svg" alt="" />
                </button>
                <input type="text" name="name" value="1" />
                <button class="minus-btn" type="button" name="button">
                    <img src="https://designmodo.com/demo/shopping-cart/minus.svg" alt="" />
                </button>
                </div>
            
                <div class="total-price">$349</div>
            </div>
        </div>

        
        <div className="box col-5">
            <div className="box-title">
                <h1>Checkout</h1>
            </div>

            <div className="form">
                <form>
                <div className="form-group row">
                    <label for="example-email-input" className="col-2 col-form-label">Email</label>
                    <div className="col-10">
                        <input className="form-control" type="email" placeholder="awesome@miruku.com" id="example-email-input" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="example-tel-input" className="col-2 col-form-label">Phone</label>
                    <div className="col-10">
                        <input className="form-control" type="tel" placeholder="1-(555)-555-5555" id="example-tel-input" />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="example-datetime-local-input" className="col-2 col-form-label">Date and time</label>
                    <div className="col-10">
                        <input className="form-control" type="datetime-local" placeholder="2011-08-19T13:45:00" id="example-datetime-local-input" />
                    </div>
                </div>
                <div className="form-group row">
                    <legend className="col-form-legend col-10">Pick-up or Delivery Location</legend>
                    <div className="col-10">
                        <div className="form-check">
                            <label className="form-check-label">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" placeholder="option1" checked />
                                Option one is this and that&mdash;be sure to include why it's great
                            </label>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" placeholder="option2" />
                                Pick-up at 1280 Baseline Rd
                            </label>
                        </div>
                        <div className="form-check disabled">
                            <label className="form-check-label">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" placeholder="option3" />
                                <input class="form-control" type="text" placeholder="Delivery at" id="example-text-input" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label for="exampleTextarea"></label>
                    <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        </div>
    </div>
    )
}
export default Checkout