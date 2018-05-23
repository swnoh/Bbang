import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import "./Intro.css";
import Footer from "./Footer";

const MapComponent = withScriptjs(
  withGoogleMap(props => {
    return (
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: 45.364083, lng: -75.732698 }}
      >
        {props.isMarkerShown && (
          <Marker position={{ lat: 45.364083, lng: -75.732698 }} />
        )}
      </GoogleMap>
    );
  })
);

class Intro extends Component {
  render() {
    return (
      <div className="container content-delivery transition-item">
        <div className="row">
          <div className="col-md-12">
            <h1>ABOUT MIRUKU</h1>
            <p>
              We specialize in Asian style of desserts made with premium
              ingredients to give their customers an exclusive high-end product.
              Everything is from scratch and fresh.
            </p>
            <br />
            <br />
            <br />
            <br />
            <h1>* PICK-UP / DELIVERY *</h1>

            <h2>PICK-UP AVAILABLE AT (BY APPOINTMENT)</h2>

            <blockquote>
              <p>1280 Baseline Rd, Ottawa</p>
              <p>Sushi Kan Parking Lot </p>
              <p>Mon-Sat, 9am to 9pm </p>
            </blockquote>
            <div className="content-map">
              <MapComponent
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `600px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </div>
            <h2>DELIVERY (BY APPOINTMENT)</h2>
            <blockquote>
              <p>Mon-Fri, 10am to 2pm / 6pm to 9pm</p>
              <p>
                All menu is available to deliver, but whole cake has to be
                picked up.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
