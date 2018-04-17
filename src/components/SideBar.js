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
  static defaultProps = {
    onClicked() {}
  }
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    e.preventDefault();
    this.props.onClicked(e);
    console.log(e.currentTarget.id);
  }
  render() {
    // const css = {
    //   paddingLeft: "45px",
    //   paddingTop: "10px",
    //   paddingBottom: "10px",
    //   display: "block",
    //   animation: "fadein 1.0s ease-in"
    // };
    const products = this.props.products;
    const productItem = products.map(r => <AccordionItemBody>
        <div>
          <a class="sidebar_menuItem" key={r.id} id={r.id} data={r.id} onClick={this.handleClick}>
            {r.title}
          </a>
        </div>
      </AccordionItemBody>);
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
            {productItem}
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