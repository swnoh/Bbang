import React, { Component } from "react";
import './SideBar.css';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

class SideBar extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    e.preventDefault();
    console.log("Hello");
  }
  render() {
    // const css = {
    //   paddingLeft: "45px",
    //   paddingTop: "10px",
    //   paddingBottom: "10px",
    //   display: "block",
    //   animation: "fadein 1.0s ease-in"
    // };
    return (
      <div className="sideBar">
        <Accordion>
          <AccordionItem>
            <AccordionItemTitle>
              <h3>About</h3>
            </AccordionItemTitle>
          </AccordionItem>

          <AccordionItem expanded={true}>
            <AccordionItemTitle>
              <h3>MENU</h3>
            </AccordionItemTitle>
            {this.props.products.map((r, index) => (
              <AccordionItemBody>
                <p key={index} onClick={this.handleClick}>{r.title}</p>
              </AccordionItemBody>
            ))}
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <h3>Contact</h3>
            </AccordionItemTitle>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}

export default SideBar;


        // <a href="#about">About</a>
        // <a href="#services">Services</a>
        // <a href="#clients">Clients</a>
        // <a href="#contact">Contact</a>
        // <button class="dropdown-btn" onClick={this.dropDown}>Dropdown 
        //   <i class="fa fa-caret-down"></i>
        // </button>
        // <div class="dropdown-container" >
        //   <a href="#">Link 1</a>
        //   <a href="#">Link 2</a>
        //   <a href="#">Link 3</a>
        // </div>
        // <a href="#contact">Search</a>