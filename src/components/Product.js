import React, { Component } from "react";
import SideBar from "./SideBar";
import "./Product.css";
import Swiper from "react-id-swiper";
import style from "react-id-swiper/src/styles/css/swiper.css";
class Product extends Component {
  render() {

      const params = {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoHeight: true
      }

    return <div className="product">
        <div id="sideBar_container">
          <SideBar />
        </div>
        <div id="swiper_container">
          <Swiper {...params}>
            <div>
              <img src="https://mirukuottawacom.files.wordpress.com/2018/01/img_6317.jpg?w=461&h=446" alt="Chi" id="swiperImg" />
            </div>
            <div>
              <img src="https://mirukuottawacom.files.wordpress.com/2018/01/3b2dc945752bb3f8e6a1255605_original_.jpg?w=476&h=476&crop=1" alt="Chi" id="swiperImg" />
            </div>
            <div>
              <img src="https://mirukuottawacom.files.wordpress.com/2018/01/img_6317.jpg?w=461&h=446" alt="Chi" id="swiperImg" />
            </div>
            <div>Slide 4</div>
            <div>Slide 5</div>

          </Swiper>
        </div>
      </div>;
  }
}

export default Product;

// background-position: center;
//   background-repeat: no-repeat;

// #D3D3D3 그레이
// #FFE4E1 핑크
// #FFFAF0 화이트
