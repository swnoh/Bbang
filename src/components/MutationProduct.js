import React, { Component } from 'react'
import { Mutation, Query } from 'react-apollo'
import gql from 'graphql-tag'

const CreateProductMutation = gql`
    mutation createProduct( $imagePath: [String]!, $title: [String]!, $description: [String]!, $price: [Float]!) { 
        createProduct (imagePath: $imagePath, title: $title, description: $description, price: $price) {
            imagePath
            title
            description
            price
        }
    }
`;

const UpdateProductMutation = gql`
    mutation updateProduct( $id: ID!, $imagePath: [String]!, $title: [String]!, $description: [String]!, $price: [Float]!) { 
        updateProduct (id: $id, imagePath: $imagePath, title: $title, description: $description, price: $price) {
            imagePath
            title
            description
            price
        }
    }
`;

/*
mutation{
  createProduct (
    imagePath: "https://www.dropbox.com/s/e2cpoi483bbozfa/KakaoTalk_Moim_4qVikdQsH58Q6D5o728G69glEr94VH.jpg?raw=1"
        title: "Royal milk tea bottle"
        description: "Infused earl grey leaf with milk, a minimum amount of sweetness "
        price: 6.5 ) 
  {
    id,
    price,
    imagePath,
    description
  }
}
*/

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


class MutationProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            imagePath: [],
            title: [],
            description: [],
            price: [],
            checkedMatchPrice: false,
            isSubmitForm: false,
            isUpdateSubmitForm: false
        }
    }
    handleMutation = (event) => {
        event.preventDefault();
        const imagePath = event.target[0].value.replace(', ',',').split(',');
        const title = event.target[1].value.replace(', ',',').split(',');
        const description = event.target[2].value.replace(', ',',').split(',');
        const price = event.target[3].value.replace(', ',',').split(',');
        const checkedMatchPrice = event.target[4].checked;

        // this.setState({
        //     imagePath: imagePath,
        //     title: title,
        //     description: description,
        //     price: price,
        //     checkedMatchPrice: checkedMatchPrice,
        //     isSubmitForm: !this.state.isSubmitForm
        // })
        console.log(imagePath)
        console.log(title)
        console.log(description)
        console.log(price)
        console.log(checkedMatchPrice)
        event.target.reset();
    }

    handleUpdateMutation = (event) => {
        event.preventDefault();
        const id = event.target[0].value;
        const imagePath = event.target[1].value.replace(', ',',').split(',');
        const title = event.target[2].value.replace(', ',',').split(',');
        const description = event.target[3].value.replace(', ',',').split(',');
        const price = event.target[4].value.replace(', ',',').split(',');
        const checkedMatchPrice = event.target[5].checked;

        this.setState({
            id: id,
            imagePath: imagePath,
            title: title,
            description: description,
            price: price,
            checkedMatchPrice: checkedMatchPrice,
            isUpdateSubmitForm: !this.state.isUpdateSubmitForm
        })
        
    }

    handleInput = (event) => {
        event.preventDefault();
        
    }

    render() {
        return (
            <React.Fragment>
            <Mutation mutation={UpdateProductMutation}>
            {( updateProduct ) => {

                if (this.state.isUpdateSubmitForm){
                    updateProduct({
                        variables: {
                            id: this.state.id,
                            imagePath: this.state.imagePath,
                            title: this.state.title,
                            description: this.state.description,
                            price: this.state.price,
                        }
                    })
                    this.setState({isUpdateSubmitForm: false});
                }

                return null;
                }
            }
            </Mutation>
            <Mutation mutation={CreateProductMutation}>

            {( createProduct, updateProduct ) => {
                if (this.state.isSubmitForm){
                    createProduct({
                        variables: {
                            imagePath: this.state.imagePath,
                            title: this.state.title,
                            description: this.state.description,
                            price: this.state.price,
                        }
                    })
                    this.setState({isSubmitForm: false});
                }

                if (this.state.isUpdateSubmitForm){
                    updateProduct({
                        variables: {
                            id: this.state.id,
                            imagePath: this.state.imagePath,
                            title: this.state.title,
                            description: this.state.description,
                            price: this.state.price,
                        }
                    })
                    this.setState({isUpdateSubmitForm: false});
                }

                return (
                    
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
                        <h1>Add new product</h1><br/><br/>
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
                        <div class="form-group">
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck" />
                            <label class="form-check-label" for="gridCheck">
                                Matching price
                            </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        
                    </form>
                )
                }
            }

            </Mutation>

            <Query query={productsListQuery}>
                {({ loading, error, data }) => {
                if (loading) {
                    return <p>Loading ...</p>;
                }
                if (error) {
                    return <p>{error.message}</p>;
                }

                return (
                    <div className="container" id="products-data">
                        <style>
                            {
                                `
                                .update-mutation-product {
                                    padding: 30px;
                                }
                                .update-mutation-product .form-control {
                                    color: black  !important;
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
                                `
                            }
                        </style>
                        <h1>Products</h1>
                            {data.products.map((product, index) =>
                                <div className="row">
                                    <div className="col-2">
                                        {product.imagePath.map((x, i) => <img key={i} src={x} />)}
                                    </div>
                                    <div className="col-10">
                                    <form className="update-mutation-product" onSubmit={this.handleUpdateMutation}> 
                                        <div className="form-group">
                                            <label for="inputID">ID</label>
                                            <input type="text" className="form-control"
                                            value={product.id} disabled/>
                                        </div>
                                        <div className="form-group">
                                            <label for="inputImagePath">imagePath</label>
                                            <input type="text" className="form-control" onChange={this.handleInput}
                                            value={product.imagePath.map(x => x)}/>
                                        </div>
                                        <div className="form-group">
                                            <label for="inputAddress2">title</label>
                                            <input type="text" className="form-control"
                                            value={product.title.map(x => x)}/>
                                        </div>
                                        <div className="form-group">
                                            <label for="inputAddress">description</label>
                                            <input type="text" className="form-control" 
                                            value={product.description.map(x => x)}/>
                                        </div>
                                        <div className="form-group">
                                            <label for="inputAddress2">price</label>
                                            <input type="text" className="form-control"
                                            value={product.price.map(x => x)}/>
                                        </div>
                                        <div class="form-group">
                                            <div class="form-check">
                                            {/* <input class="form-check-input" type="checkbox" id="gridCheck" /> */}
                                            {product.checkedMatchPrice
                                            ? <input class="form-check-input" type="checkbox" id="gridCheck" checked/>
                                            : <input class="form-check-input" type="checkbox" id="gridCheck" />
                                            }
                                            <label class="form-check-label" for="gridCheck">
                                                Matching price
                                            </label>
                                            </div>
                                        </div><br/>
                                        <button type="submit" className="btn btn-primary">Update</button>
                                    </form>
                                        {/* <h2>imagePath</h2>
                                        {product.imagePath.map((x, i) => <li key={i}> imagePath={x}</li>)}
                                        <h2>title</h2>
                                        {product.title.map((x, i) => <li key={i}> {x}</li>)}
                                        <h2>description</h2>
                                        {product.description.map((x, i) => <li key={i}> {x}</li>)}
                                        <h2>price</h2>
                                        {product.price.map((x, i) =><li key={i}> {x}</li>)} */}
                                    </div>
                                </div>)}
                    </div>
                )
                }}
            </Query>
            </React.Fragment>
        )
    }
}




export default MutationProduct