import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import Cart from './components/Cart';
import ContentDelivery from './components/ContentDelivery';
import ProductsListWithData from './components/ProductsListWithData';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache(),
}); 

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showCart: false,
      products: [],
      setOpen: false
    }
  }

  handleAddCart = (product) => {
    this.setState({
      products: [...this.state.products, product],
      showCart: true
    })
  }

  handleRemoveCart = (productId) => {
    this.setState({
      products: this.state.products.filter(product => product.id !== productId)
    })
  }
  
  handleModal = () => {
    this.setState({ setOpen: !this.state.setOpen })
  }

  handleOpenModal = () => {
    this.setState({ setOpen: true })
  }

  handleCloseModal = () => {
    this.setState({ setOpen: false })
  }

  onCart = () => {
    this.setState({showCart: !this.state.showCart})
  }


  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Header 
            onCart={this.onCart} 
            products={this.state.products} 
            showCart={this.state.showCart} 
            setOpen={this.state.setOpen}
            handleModal={this.handleModal}
            handleOpenModal={this.handleOpenModal}
            handleCloseModal={this.handleCloseModal}
            handleRemoveCart={this.handleRemoveCart}
          />
          
          <Home/>
          <div className={this.state.showCart ? "home-content showCart":"home-content"}>
            <ProductsListWithData handleAddCart={this.handleAddCart} />
            <ContentDelivery />
            <Cart 
              onCart={this.onCart}
              products={this.state.products}
              showCart={this.state.showCart}
              handleOpenModal={this.handleOpenModal}
              handleRemoveCart={this.handleRemoveCart}
            />
          </div>
        </div>
      </ApolloProvider>
    );    
  }
}

export default App;
