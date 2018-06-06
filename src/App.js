import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Intro from "./components/Intro";
import ProductDetail from "./components/ProductDetail.js";
import ProductsList from "./components/ProductsList";
import Admin from "./components/Admin";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageTransition from "react-router-page-transition";

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:4000/graphql" }),
  cache: new InMemoryCache()
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCart: false,
      products: [],
      CheckoutOpen: false
    };
  }

  handleAddCart = product => {
    this.setState({
      products: [...this.state.products, product],
      showCart: true
    });
  };

  handleRemoveCart = productId => {
    this.setState({
      products: this.state.products.filter(product => product.id !== productId)
    });
  };

  handleInitialCart = () => {
    this.setState({
      products: []
    });
  };

  handleModal = () => {
    this.setState({ CheckoutOpen: !this.state.CheckoutOpen });
  };

  onCart = () => {
    this.setState({ showCart: !this.state.showCart });
  };

  offCart = () => {
    this.setState({ showCart: false });
  };

  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div className="App">
            <Header
              onCart={this.onCart}
              offCart={this.offCart}
              products={this.state.products}
              showCart={this.state.showCart}
              CheckoutOpen={this.state.CheckoutOpen}
              stickyHeader={"sticky"}
              handleModal={this.handleModal}
              handleRemoveCart={this.handleRemoveCart}
              handleInitialCart={this.handleInitialCart}
            />
            <Switch>
              <div
                className={
                  this.state.showCart ? "home-content showCart" : "home-content"
                }
              >
                <Route exact path="/" component={Home} />
                {/* <Home /> */}
                <div className="container-fluid content-body">
                  <div className="col-12">
                    <Cart
                      onCart={this.onCart}
                      products={this.state.products}
                      showCart={this.state.showCart}
                      handleOpenModal={this.handleModal}
                      handleRemoveCart={this.handleRemoveCart}
                    />
                  </div>
                  <div className="col-12">
                    {/* <ProductsList />
                    <Intro /> */}
                    {/* <Route path="/about" component={Intro} />
                    <Route
                      path="/shop"
                      render={() => (
                        <ProductsList handleAddCart={this.handleAddCart} />
                      )}
                    /> */}
                    <Route
                      exact
                      path="/product/:id"
                      component={props => (
                        <ProductDetail
                          match={props.match}
                          handleAddCart={this.handleAddCart}
                        />
                      )}
                    />
                    <Route exact path="/admin" component={Admin} />
                  </div>
                </div>
              </div>
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
