import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const placeNewOrderMutation = gql`
    mutation placeNewOrder( $email: String!, $phone: String, $date: String!, $location: String!, $comment: String,) { 
        placeNewOrder (email: $email, phone: $phone, date: $date, location: $location, comment: $comment) {
            email
            phone
            date
            location
            comment
        }
    }
`;

class PlaceNewOrder extends Component {
    constructor() {
        super()
        this.state = {
            submitForm: false
        }
        this.clearOrderForm = this.clearOrderForm.bind(this)
    }

    clearOrderForm () {
        this.props.clearOrderForm()
    }

    render() {

        return (
            <Mutation mutation={placeNewOrderMutation}>

            {( placeNewOrder ) => {
                    if (this.props.isSubmitForm){
                        placeNewOrder({
                            variables: {
                                email: this.props.email,
                                phone: this.props.phone,
                                date: this.props.date,
                                location: this.props.location,
                                comment: this.props.comment,
                            }
                        })
                        this.props.clearOrderForm()
                    } 
                    return null
                }
            }
            </Mutation>
        )
    }
}

export default PlaceNewOrder