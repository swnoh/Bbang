import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const placeNewOrderMutation = gql`
  mutation placeNewOrder(
    $email: String!
    $phone: String
    $date: String!
    $location: String!
    $comment: String
  ) {
    placeNewOrder(
      email: $email
      phone: $phone
      date: $date
      location: $location
      comment: $comment
    ) {
      email
      phone
      date
      location
      comment
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

class PlaceNewOrder extends Component {
  constructor() {
    super();
    this.state = {
      submitForm: false
    };
    this.clearOrderForm = this.clearOrderForm.bind(this);
  }

  clearOrderForm() {
    this.props.clearOrderForm();
  }

  render() {
    return (
      <Mutation mutation={placeNewOrderMutation}>
        {placeNewOrder => {
          if (this.props.isSubmitForm) {
            placeNewOrder({
              variables: {
                email: this.props.email,
                phone: this.props.phone,
                date: this.props.date,
                location: this.props.location,
                comment: this.props.comment
              }
            });
            this.props.clearOrderForm();
          }
          return null;
        }}
      </Mutation>
    );
  }
}

export default PlaceNewOrder;
