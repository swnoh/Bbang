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

  render() {
    return <div className="sideBar">
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
            <AccordionItemBody>
              <p>Sweet Bento</p>
            </AccordionItemBody>
            <AccordionItemBody>
              <p>Milk Tea Bottle</p>
            </AccordionItemBody>
            <AccordionItemBody>
              <p>Cube Cube</p>
            </AccordionItemBody>
            <AccordionItemBody>
              <p>Bon Bon</p>
            </AccordionItemBody>
            <AccordionItemBody>
              <p>Quichi</p>
            </AccordionItemBody>
            <AccordionItemBody>
              <p>Scone</p>
            </AccordionItemBody>
            <AccordionItemBody>
              <p>Whole Cake</p>
            </AccordionItemBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionItemTitle>
              <h3>Contact</h3>
            </AccordionItemTitle>
          </AccordionItem>
        </Accordion>
      </div>;
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