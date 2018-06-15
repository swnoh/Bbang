import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import "./ProductsList.css";
import { NavLink } from "react-router-dom";
import { Element } from "react-scroll";

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
        <div className="container content-shop" id="content-shop">
          <div className="jumbotron">
            <Element name="scrollToShop">
              <h1>SHOP</h1>
            </Element>
            <p className="divider-line">
              Everyone deserves more delicious dessert
            </p>
          </div>
          <div className="row" id="product-thumb">
            {data.products.map((product, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12 text-center">
                <div className="thumbnail">
                  <NavLink to={"product/" + product.id}>
                    <img src={product.imagePath[0]} alt={product.title[0]} />
                    <div className="img-thumb-overlay">
                      <h2>{product.title[0]}</h2>
                      <p>
                        <a className="img-thumb-text">Find Out</a>
                      </p>
                    </div>
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
