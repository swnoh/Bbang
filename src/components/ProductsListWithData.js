import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import "./ProductsListWithData.css";

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

const ProductsListWithData = props => (
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
              <div className="col-4 text-center">
                <div className="thumbnail img-circle">
                  <img src={product.imagePath[0]} alt={product.title[0]} />
                  <div className="caption">
                    <p>{product.title[0]}</p>
                    {product.title.map(
                      (x, i) =>
                        i !== 0 ? (
                          <p>
                            {" "}
                            x={x}, i={i}{" "}
                          </p>
                        ) : null
                    )}
                  </div>
                  <button
                    className="btn btn-primary add-cart-button"
                    onClick={() => this.props.handleAddCart(product)}
                  >
                    Add Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }}
  </Query>
);

export default ProductsListWithData;
