import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import "./ProductDetail.css";
import { Redirect } from "react-router-dom";

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

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption1: [],
      selectedOption2: "",
      selectedPrice: 0,
      optionidx: 0,
      inputType: "radio",
      isChosen: true
    };
    this.imgRef = React.createRef();
  }

  handleSelectedOption = event => {
    let selections = event.target.dataset;
    let checked = event.target.childNodes[0].checked;
    let inputType = event.target.childNodes[0].type;
    this.setState(prevState => {
      return {
        selectedOption1:
          selections.option1 !== undefined
            ? checked
              ? inputType === "radio"
                ? selections.option1
                : [...this.state.selectedOption1, selections.option1]
              : this.state.selectedOption1.filter(
                  selectedOption1 => selectedOption1 !== selections.option1
                )
            : prevState.selectedOption1,
        selectedOption2:
          selections.option2 !== undefined
            ? selections.option2
            : prevState.selectedOption2,
        selectedPrice:
          selections.price !== undefined
            ? selections.price
            : prevState.selectedPrice,
        optionidx:
          selections.optionidx !== undefined
            ? parseInt(selections.optionidx, 10)
            : prevState.optionidx,
        inputType:
          inputType !== undefined && selections.option1 !== undefined
            ? inputType
            : prevState.inputType,
        isChosen: true
      };
    });
  };

  guidGenerator = () => {
    var S4 = function() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (
      S4() +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      S4() +
      S4()
    );
  };

  handleAddCart = event => {
    event.preventDefault();

    let product = {
      id: this.guidGenerator(),
      imagePath: this.imgRef.current.src,
      selectedOption1: this.state.selectedOption1,
      selectedOption2: this.state.selectedOption2,
      price: parseFloat(this.state.selectedPrice)
    };

    let choose = this.state.selectedOption2;

    let isChosen =
      this.state.inputType === "radio" ||
      this.state.selectedOption1.length ===
        parseInt(
          choose.slice(
            choose.indexOf("choose") + 6,
            choose.indexOf("choose") + 9
          ),
          10
        ) ||
      choose.indexOf("variety") > -1;

    (!isChosen || this.state.selectedOption1.length === 0) &&
      this.setState({ isChosen: false });

    isChosen &&
      this.state.selectedOption1.length > 0 &&
      this.state.selectedPrice &&
      this.props.handleAddCart(product);
  };

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Query query={productsListQuery}>
        {({ loading, error, data }) => {
          if (loading) {
            return <p>Loading ...</p>;
          }
          if (error) {
            return <p>{error.message}</p>;
          }

          let prod;
          data.products.map(product => {
            if (product.id === this.props.match.params.id) {
              prod = product;
            }
            return null;
          });

          if (!prod) {
            return <Redirect to={{ pathname: "/" }} />;
          }

          return (
            <div className="container product-detail">
              <div className="col-sm-12 col-md-8 col-xl-7">
                <div
                  id="productCarousel"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    {prod.title.length - 1 > prod.imagePath.length
                      ? prod.imagePath.map((img, index) => {
                          return index === 0 ? (
                            <div className="item active">
                              <img src={img} alt={img} ref={this.imgRef} />
                            </div>
                          ) : (
                            <div className="item">
                              <img src={img} alt={img} />
                            </div>
                          );
                        })
                      : prod.imagePath.map((img, index) => {
                          return index === this.state.optionidx ? (
                            <div className="item active">
                              <img src={img} alt={img} ref={this.imgRef} />
                            </div>
                          ) : (
                            <div className="item">
                              <img src={img} alt={img} />
                            </div>
                          );
                        })}
                  </div>
                  <a
                    className="carousel-control left"
                    href="#productCarousel"
                    data-slide="prev"
                  >
                    <span className="glyphicon glyphicon-chevron-left" />
                  </a>
                  <a
                    className="carousel-control right"
                    href="#productCarousel"
                    data-slide="next"
                  >
                    <span claclassNamess="glyphicon glyphicon-chevron-right" />
                  </a>
                </div>

                <div
                  className="product-description"
                  dangerouslySetInnerHTML={{ __html: prod.description }}
                />
              </div>
              <form
                className="form-product-detail col-sm-12 col-md-4 col-xl-5"
                onSubmit={this.handleAddCart}
              >
                <div className="form-group row btn-product-option1">
                  <h1>{prod.title[0]}</h1>
                  <br />

                  <div
                    className="btn-group btn-group-toggle row "
                    data-toggle="buttons"
                    onClick={this.handleSelectedOption}
                  >
                    {prod.title.map(
                      (title, index) =>
                        index !== 0 ? (
                          <label
                            className="btn btn-outline-info btn-lg product-detail-btn-menu option1"
                            data-option1={title.split(": ")[0]}
                            data-price={title.split(": ")[1]}
                            data-optionidx={index - 1}
                          >
                            <input
                              type={
                                prod.price[0].indexOf("flavour") > -1
                                  ? "checkbox"
                                  : "radio"
                              }
                              name="options"
                              id="option1"
                              autoComplete="off"
                            />
                            {title.split(": ")[0]}
                          </label>
                        ) : null
                    )}
                  </div>
                </div>
                {prod.price[0] !== "" && (
                  <div className="form-group row">
                    <div
                      className="btn-group btn-group-toggle row"
                      data-toggle="buttons"
                      onClick={this.handleSelectedOption}
                    >
                      {prod.price.map((price, index) => (
                        <label
                          className="btn btn-outline-secondary btn-lg product-detail-btn-menu option2"
                          data-option2={price.split(": ")[0]}
                          data-price={price.split(": ")[1]}
                        >
                          <input
                            type="radio"
                            name="options"
                            id={"product-option-" + index}
                            autoComplete="off"
                          />
                          {price.split(":")[0]}
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                <div className="form-group row">
                  <div className="product-detail-price">
                    {typeof this.state.selectedOption1 !== "string" ? (
                      <h2>
                        {this.state.selectedOption1.map(
                          (option, index) =>
                            index === this.state.selectedOption1.length - 1
                              ? option
                              : option + " | "
                        )}
                      </h2>
                    ) : (
                      <h2>{this.state.selectedOption1}</h2>
                    )}
                    <div className="product-detail-selection">
                      <h2> {this.state.selectedOption2} </h2>
                      {this.state.selectedPrice !== 0 && (
                        <h2>Price: $ {this.state.selectedPrice}</h2>
                      )}
                    </div>
                    {!this.state.isChosen && (
                      <h3>Please select the proper option.</h3>
                    )}
                  </div>
                </div>
                <button
                  type="submit"
                  className={
                    "btn btn-lg btn-block " +
                    (this.state.selectedOption1 &&
                      this.state.selectedPrice &&
                      "showAddCartButton")
                  }
                  id="button-add-cart"
                >
                  {this.state.selectedOption1 && this.state.selectedPrice ? (
                    <i className="fa fa-shopping-cart">
                      <span id="addCartText">ADD TO CART</span>
                    </i>
                  ) : (
                    "Please select an option."
                  )}
                </button>
              </form>
            </div>
          );
        }}
      </Query>
    );
  }
}

{
  /* <div
            className="panel-group col-sm-12 col-md-5 col-xl-5"
            id="accordion-menu"
            role="tablist"
            aria-multiselectable="true"
          >
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingOne">
                <h4 className="panel-title">
                  <a
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion-menu"
                    href="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    SWEET BENTO
                  </a>
                </h4>
              </div>
              <div
                id="collapseOne"
                className="panel-collapse collapse in"
                role="tabpanel"
                aria-labelledby="headingOne"
              >
                <div className="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingTwo">
                <h4 className="panel-title">
                  <a
                    className="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion-menu"
                    href="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    MILK TEA BOTTLE
                  </a>
                </h4>
              </div>
              <div
                id="collapseTwo"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingTwo"
              >
                <div className="panel-body">
                  <img
                    src={data.products[0].imagePath[0]}
                    alt={data.products[0].title[0]}
                  />
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingThree">
                <h4 className="panel-title">
                  <a
                    className="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion-menu"
                    href="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    CUBE CUBE
                  </a>
                </h4>
              </div>
              <div
                id="collapseThree"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingThree"
              >
                <div className="panel-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid.
                </div>
              </div>
            </div>
          </div> */
}

/* <div className="form-group row">
              <label
                htmlFor="product-selection-price"
                className="col-2 col-form-label"
              >
                Price
              </label>
              <div className="col-10">
                <select className="form-control">
                  <option disabled selected value>
                    {" "}
                    -- select price --{" "}
                  </option>
                  {prod.price.map(price => <option>{price}</option>)}
                </select>
              </div>
            </div> */

// <div className="col-4 text-center">
//   <div className="thumbnail img-circle">
//     <div className="caption">
//       <p>{product.title[0]}</p>
//       {product.title.map(
//         (x, i) =>
//           i !== 0 ? (
//             <p>
//               x={x}, i={i}
//             </p>
//           ) : null
//       )}
//     </div>
//     <button
//       className="btn btn-primary add-cart-button"
//       onClick={() => props.handleAddCart(product)}
//     >
//       Add Cart
//     </button>
//   </div>
// </div>

export default ProductDetail;
