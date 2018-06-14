import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import gql from "graphql-tag";
import { confirmAlert } from "react-confirm-alert";
import "./Admin.css";

const CreateProductMutation = gql`
  mutation createProduct(
    $imagePath: [String]!
    $title: [String]!
    $description: String!
    $price: [String]!
    $checkedMatchPrice: Boolean!
  ) {
    createProduct(
      imagePath: $imagePath
      title: $title
      description: $description
      price: $price
      checkedMatchPrice: $checkedMatchPrice
    ) {
      imagePath
      title
      description
      price
    }
  }
`;

const UpdateProductMutation = gql`
  mutation updateProduct(
    $id: ID!
    $imagePath: [String]!
    $title: [String]!
    $description: String!
    $price: [String]!
    $checkedMatchPrice: Boolean!
  ) {
    updateProduct(
      id: $id
      imagePath: $imagePath
      title: $title
      description: $description
      price: $price
      checkedMatchPrice: $checkedMatchPrice
    ) {
      id
      imagePath
      title
      description
      price
    }
  }
`;

const DeleteProductMutation = gql`
  mutation deleteProduct($id: ID!) {
    deleteProduct(id: $id) {
      id
    }
  }
`;

const productsListQuery = gql`
  query ProductListQuery {
    products {
      id
      imagePath
      title
      description
      price
      checkedMatchPrice
    }
  }
`;

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      imagePath: [],
      title: [],
      description: "",
      price: [],
      checkedMatchPrice: false,
      isSubmitForm: false,
      isUpdateSubmitForm: false,
      isDeleteProduct: false
    };
  }
  handleMutation = event => {
    event.preventDefault();
    const imagePath = event.target[0].value.replace(", ", ",").split(",");
    const title = event.target[1].value.replace(", ", ",").split(",");
    const description = event.target[2].value;
    const price = event.target[3].value.replace(", ", ",").split(",");
    const checkedMatchPrice = event.target[4].checked;

    this.setState({
      imagePath: imagePath,
      title: title,
      description: description,
      price: price,
      checkedMatchPrice: checkedMatchPrice,
      isSubmitForm: !this.state.isSubmitForm
    });
    event.target.reset();
  };

  handleUpdateMutation = event => {
    event.preventDefault();
    const id = event.target[0].value;
    const imagePath = event.target[1].value.replace(", ", ",").split(",");
    const title = event.target[2].value.replace(", ", ",").split(",");
    const description = event.target[3].value;
    const price = event.target[4].value.replace(", ", ",").split(",");
    const checkedMatchPrice = event.target[5].checked;

    this.setState({
      id: id,
      imagePath: imagePath,
      title: title,
      description: description,
      price: price,
      checkedMatchPrice: checkedMatchPrice,
      isUpdateSubmitForm: !this.state.isUpdateSubmitForm
    });
  };

  handleDelete = id => {
    confirmAlert({
      title: "Confirm to delete the item",
      message: "Are you sure to delete this.",
      buttons: [
        {
          label: "Delete",
          onClick: () => {
            this.setState({
              id: id,
              isDeleteProduct: true
            });
          }
        },
        {
          label: "Cancel",
          onClick: () => null
        }
      ]
    });
  };

  handleInput = event => {
    event.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <form className="mutation-product" onSubmit={this.handleMutation}>
          <style>
            {`
              .mutation-product {
                  padding: 150px;
              }
              .mutation-product .form-control {
                  color: black  !important;
                  }
              `}
          </style>
          <h1>Add new product</h1>
          <br />
          <br />
          <div className="form-group">
            <label for="inputImagePath">imagePath</label>
            <input type="text" className="form-control" id="inputImagePath" />
          </div>
          <div className="form-group">
            <label for="inputTitle">title</label>
            <input type="text" className="form-control" id="inputTitle" />
          </div>
          <div className="form-group">
            <label for="inputDescription">description</label>
            <input type="text" className="form-control" id="inputDescription" />
          </div>
          <div className="form-group">
            <label for="inputPrice">price</label>
            <input type="text" className="form-control" id="inputPrice" />
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" for="gridCheck">
                Matching price
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        <Query query={productsListQuery}>
          {({ loading, error, data }) => {
            if (loading) {
              return <p>Loading ...</p>;
            }
            if (error) {
              return <p>{error.message}</p>;
            }

            return (
              <div className="container-fluid" id="products-data">
                <style>
                  {`
                    .update-mutation-product {
                        padding: 30px;
                    }
                    .update-mutation-product .form-control {
                        color: black  !important;
                    }
                    #products-data {
                      padding: 30px;
                    }

                    .form-group textarea {
                      
                      overflow: hidden;
                      min-height: 200px;
                      max-height: 300px;
                    }

                    #products-data .row {
                        border-bottom: 1px solid gray;
                        padding-bottom: 30px;
                    }
                    #products-data img {
                        width: 200px;
                        padding: 30px;
                    }
                    #products-data h2 {
                        padding-top: 30px;
                    }
                    #products-data li {
                        font-size: 15px;
                    }
                    #admin-delete-button {
                        position: absolute;
                        right: 30px;
                        bottom: 30px;
                    }
                    `}
                </style>
                <h1>Products</h1>
                {data.products.map((product, index) => (
                  <div className="row">
                    <div className="col-2">
                      {product.imagePath.map((x, i) => <img key={i} src={x} />)}
                    </div>
                    <div className="col-10">
                      <form
                        className="update-mutation-product"
                        onSubmit={this.handleUpdateMutation}
                      >
                        <div className="form-group">
                          <label for="inputID">ID</label>
                          <input
                            type="text"
                            className="form-control"
                            value={product.id}
                          />
                        </div>
                        <div className="form-group">
                          <label for="inputImagePath">imagePath</label>
                          <input
                            type="text"
                            className="form-control"
                            onChange={this.handleInput}
                            defaultValue={product.imagePath.map(x => x)}
                          />
                        </div>
                        <div className="form-group">
                          <label for="inputAddress2">title</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={product.title.map(x => x)}
                          />
                        </div>
                        <div className="form-group">
                          <label for="inputAddress">description</label>
                          <textarea
                            type="text"
                            className="form-control"
                            defaultValue={product.description}
                          />
                        </div>
                        <div className="form-group">
                          <label for="inputAddress2">price</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={product.price.map(x => x)}
                          />
                        </div>
                        <div className="form-group">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="gridCheck"
                              defaultChecked={product.checkedMatchPrice}
                            />
                            {/* {product.checkedMatchPrice ? (
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="gridCheck"
                                checked
                              />
                            ) : (
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="gridCheck"
                              />
                            )} */}
                            <label className="form-check-label" for="gridCheck">
                              Matching price
                            </label>
                          </div>
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary">
                          Update
                        </button>
                      </form>
                      <button
                        className="btn btn-danger"
                        id="admin-delete-button"
                        onClick={() => this.handleDelete(product.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            );
          }}
        </Query>

        <Mutation mutation={CreateProductMutation}>
          {createProduct => {
            if (this.state.isSubmitForm) {
              createProduct({
                variables: {
                  imagePath: this.state.imagePath,
                  title: this.state.title,
                  description: this.state.description,
                  price: this.state.price,
                  checkedMatchPrice: this.state.checkedMatchPrice
                }
              });
              this.setState({ isSubmitForm: false });
            }

            return null;
          }}
        </Mutation>

        <Mutation mutation={UpdateProductMutation}>
          {updateProduct => {
            if (this.state.isUpdateSubmitForm) {
              updateProduct({
                variables: {
                  id: this.state.id,
                  imagePath: this.state.imagePath,
                  title: this.state.title,
                  description: this.state.description,
                  price: this.state.price,
                  checkedMatchPrice: this.state.checkedMatchPrice
                }
              });
              this.setState({ isUpdateSubmitForm: false });
            }

            return null;
          }}
        </Mutation>

        <Mutation mutation={DeleteProductMutation}>
          {deleteProduct => {
            if (this.state.isDeleteProduct) {
              deleteProduct({
                variables: {
                  id: this.state.id
                }
              });
              this.setState({ isDeleteProduct: false });
            }

            return null;
          }}
        </Mutation>
      </React.Fragment>
    );
  }
}
export default Admin;
