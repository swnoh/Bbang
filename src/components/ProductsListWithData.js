import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Product from './Product';
import './ProductsListWithData.css'

const productsListQuery = gql`
    query ProductListQuery { 
      products {
          id
          imagePath
          title
          description
          price
      }
    }
 `;

 const ProductsListWithData = (props) => (
   <Query query={productsListQuery}>
     {({ loading, error, data }) => {
      if (loading) {
        return <p>Loading ...</p>;
      }
      if (error) {
        return <p>{error.message}</p>;
      }

      return (
        <div className="container">
          <div className="jumbotron">
            <h1>ミルク MIRUKU</h1><br/><br/>
            <h3>Everyone deserves more delicious dessert</h3> 
          </div>
          <div className="row" id="product-thumb">
            {data.products.map((r, index) =>
              <div className="col-4 text-center">
                <div className="thumbnail img-circle">
                    <img src={r.imagePath} alt={r.title} />
                    <div className="caption">
                      <p>{r.title}</p>
                    </div>
                    <button className="btn btn-primary" onClick={()=>props.handleAddCart(r)}>Add Cart</button>
                </div>
              </div>)}
          </div>
        </div>
      )
    }}
    </Query>
  );

export default ProductsListWithData