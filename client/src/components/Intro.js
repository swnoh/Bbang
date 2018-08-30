import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import "./Intro.css";

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
      <div
        className="container-fluid content-intro transition-item"
        id="content-intro"
      >
        <div className="row">
          <div className="col-12 content-about-top">
            <div className="content-about col-12">
              <p>
                We specialize in Asian style of desserts made with premium
                ingredients to give their customers an exclusive high-end
                product. Everything is from scratch and fresh.
              </p>
            </div>
            <div className="container-fluid col-12 text-center">
              <Flip top cascade duration={1200}>
                <h1>Catering</h1>
                <p className="divider-line">
                  We provide a absolute superior catering service.
                </p>
              </Flip>
              <br />
              <div className="row">
                <div className="col-md-4">
                  <Fade left>
                    <h2>CORPORATE EVENTS</h2>
                    <p>
                      Ottawa’s business community has chosen MIRUKU to cater
                      launches, openings and galas because they know we go above
                      and beyond.
                    </p>
                    <img src="img/catering1.jpg" alt="catering1" width="350" />
                  </Fade>
                </div>
                <div className="col-md-4">
                  <Fade bottom>
                    <h2>PRIVATE FUNCTIONS</h2>
                    <p>
                      Dinner and cocktail parties, intimate gatherings,
                      networking events & more. Contact us for help creating
                      your unique event today!
                    </p>
                    <img src="img/catering2.jpg" alt="catering2" width="350" />
                  </Fade>
                </div>
                <div className="col-md-4">
                  <Fade right>
                    <h2>WEDDINGS</h2>
                    <p>
                      Your Vision, our expertise! We will advise, assist and
                      guide you every step of the way in creating an event your
                      guests will never forget
                    </p>
                    <img src="img/catering3.jpg" alt="catering3" width="350" />
                  </Fade>
                </div>
              </div>
            </div>
            <div className="content-pickup">
              <Flip top cascade duration={1200}>
                <h1>PICK-UP & Delivery</h1>
                <p className="divider-line">
                  We provide a absolute superior catering service.
                </p>
              </Flip>
              <div className="col-sm-12 col-md-4 col-xl-4">
                <Fade left>
                  <h2>PICK-UP AVAILABLE AT (BY APPOINTMENT)</h2>
                  <blockquote>
                    <p>1280 Baseline Rd, Ottawa</p>
                    <p>Sushi Kan Parking Lot </p>
                    <p>Mon-Sat, 9am to 9pm </p>
                  </blockquote>
                </Fade>
              </div>
              <div className="content-map col-sm-12 col-md-8 col-xl-8">
                <MapComponent
                  isMarkerShown
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAQJr92VOhg0iXSvziHhxHiG4PYuuoU5Jg&v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `500px` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                />
              </div>
              <Fade left>
                <h2>DELIVERY (BY APPOINTMENT)</h2>
                <blockquote>
                  <p>Mon-Fri, 10am to 2pm / 6pm to 9pm</p>
                  <p>
                    All menu is available to deliver, but whole cake has to be
                    picked up.
                  </p>
                </blockquote>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
