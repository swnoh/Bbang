import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Cart from './Cart';

import Product from './Product';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: [
        {
          id: 0,
          imagePath: 'https://mirukuottawacom.files.wordpress.com/2018/01/img_6317.jpg?w=461&h=446',
          title: 'Bulgogi Quiche',
          description: '-Bulgogi is Korean Traditional beef dish which is marinated in sweet soy sauce',
          price: 4.25
        },
        {
          id: 1,
          imagePath: 'https://mirukuottawacom.files.wordpress.com/2018/01/3b2dc945752bb3f8e6a1255605_original_.jpg?w=476&h=476&crop=1',
          title: 'Matcha Red bean Crepe',
          description: '– Using organic high quality Matcha – Fresh and unique taste with Redbean',
          price: 20
        },
        {
          id: 2,
          imagePath: 'https://mirukuottawacom.files.wordpress.com/2018/01/img_6395.jpg?w=533&h=336',
          title: 'Sittori Cheese Terrine',
          description: '-Gluten free, Soft and smooth like ice cream, Rich Cheese taste, not Cheese scent or just flavor',
          price: 33
        }
      ],
      nextProductId: 3,
      showForm: false
    }
  }

  render() {
    const {showForm} = this.state;
    return (
      <div className="App">
        <Header onCart={()=> this.setState({showForm: !showForm})}/>
        { showForm ?
            <Cart products={this.state.products}/>: null}
        <Product products={this.state.products} />
      </div>
    );    
  }
}

export default App;
