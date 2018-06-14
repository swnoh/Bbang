import React, { Component } from "react";
import SideBar from "./SideBar";
import "./Product.css";
import Swiper from "react-id-swiper";
import ReactDrawer from "react-drawer";
import "react-drawer/lib/react-drawer.css";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      position: "right",
      noOverlay: false,
      side_desc: [
        "Individual Size",
        "Perfect for brunch",
        "Bulgogi is Korean Traditional beef dish which is marinated in sweet soy sauce",
        "Broccoli, Cheese, Tomato, Bulgogi(beef)"
      ]
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.onDrawerClose = this.onDrawerClose.bind(this);
    this.setNoOverlay = this.setNoOverlay.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  setNoOverlay(e) {
    this.setState({ noOverlay: true });
  }
  toggleDrawer() {
    this.setState({ open: !this.state.open });
  }
  closeDrawer() {
    this.setState({ open: false });
  }
  onDrawerClose() {
    this.setState({ open: false });
  }

  slideTo(idx) {
    this.swiper.slideTo(idx);
  }

  handleClick(e) {
    e.preventDefault();
    this.slideTo(e.currentTarget.id);
    this.setState({
      side_desc: this.props.products[e.currentTarget.id].description
    });
    console.log(this.state.side_desc);
  }

  toggle = () => {
    let { toggle } = this.state;

    this.setState({ toggle: !toggle });
  };

  logState = () => {
    console.log(`Drawer now ${this.state.open ? "open" : "closed"}`);
  };

  render() {
    const params = {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: { el: ".swiper-pagination", clickable: true },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      autoHeight: true,
      autoWidth: true
    };

    const { products } = this.props;
    const side_description = this.state.side_desc.map((r, idx) => (
      <li key={idx}> {r} </li>
    ));
    return (
      <div className="product">
        <div id="sideBar_container">
          <SideBar
            products={products}
            onClicked={this.handleClick}
            value={products.id}
          />
        </div>
        <div id="swiper_container">
          <Swiper
            {...params}
            ref={node => (this.swiper = node !== null ? node.swiper : null)}
          >
            {this.props.products.map((r, index) => (
              <div>
                <img src={r.imagePath} alt={r.title} id="swiperImg" />
              </div>
            ))}
          </Swiper>
        </div>
        <div id="drawer_container">
          <button
            onClick={this.toggleDrawer}
            disabled={this.state.open && !this.state.noOverlay}
          >
            Test
          </button>
        </div>
        <ReactDrawer
          open={this.state.open}
          position={this.state.position}
          onClose={this.onDrawerClose}
          noOverlay={this.state.noOverlay}
        >
          <div className="product_description">
            <i onClick={this.closeDrawer} className="icono-cross" />
            <ul>{side_description}</ul>
          </div>
        </ReactDrawer>
      </div>
    );
  }
}

export default Product;

// background-position: center;
//   background-repeat: no-repeat;

// #D3D3D3 그레이
// #FFE4E1 핑크
// #FFFAF0 화이트
