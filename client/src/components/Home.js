import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Intro from "./Intro";
import ProductsList from "./ProductsList";

const CarouselContent = () => {
  return (
    <React.Fragment>
      <Overlay />
      <div className="carousel-caption">
        <h1 className="super-heading">ミルク MIRUKU</h1>
        <br />
        <br />
        {/* <p className="super-paragraph">FRESH, FROM SCRATCH, ORDERS ONLY </p> */}
        <p className="super-paragraph">Fresh, From Scratch, Orders Only </p>
        <br />
        <ShopLinkButton />
      </div>
    </React.Fragment>
  );
};

const ShopLinkButton = () => {
  return (
    <Link to="/shop">
      <button className="btn btn-outline-light btn-lg">SHOP</button>
    </Link>
  );
};

const Overlay = () => {
  return <div className="overlay" />;
};

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="home-single-page transition-item">
          <div
            id="carousel-home"
            className="carousel carousel-fullscreen slide carousel-fade"
            data-ride="carousel"
            data-interval="5000"
            data-pause="null"
          >
            <div className="carousel-inner" role="listbox">
              <div className="item one active">
                {" "}
                <CarouselContent />{" "}
              </div>
              <div className="item two">
                {" "}
                <CarouselContent />{" "}
              </div>
              <div className="item three">
                {" "}
                <CarouselContent />{" "}
              </div>
            </div>

            <div className="home-social">
              <a
                href="http://instagram.com/miruku_ottawa"
                target="_blank"
                className="fa fa-instagram fa-3x social-icon"
              />&emsp;&emsp;
              <a
                href="https://www.facebook.com/MirukuOttawa"
                target="_blank"
                className="fa fa-facebook-square fa-3x social-icon"
              />
            </div>
          </div>
        </div>
        <ProductsList />
        <Intro />
      </React.Fragment>
    );
  }
}

export default Home;
