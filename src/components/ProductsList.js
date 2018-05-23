import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import "./ProductsList.css";
import { BrowserRouter, NavLink } from "react-router-dom";

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

const ProductsList = props => (
  <Query query={productsListQuery}>
    {({ loading, error, data }) => {
      if (loading) {
        return <p>Loading ...</p>;
      }
      if (error) {
        return <p>{error.message}</p>;
      }

      return (
        <div className="container content-shop">
          <div className="jumbotron">
            <h1>ミルク MIRUKU</h1>
            <br />
            <br />
            <h3>Everyone deserves more delicious dessert</h3>
          </div>
          <div className="row" id="product-thumb">
            {data.products.map((product, index) => (
              <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                <div className="thumbnail">
                  <NavLink to={"product/" + product.id}>
                    <img src={product.imagePath[0]} alt={product.title[0]} />
                  </NavLink>
                  <div className="caption">
                    <p>{product.title[0]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }}
  </Query>
);

export default ProductsList;
