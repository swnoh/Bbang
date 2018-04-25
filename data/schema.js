import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
    type Product {
        id: ID!,
        imagePath: String!,
        title: String!,
        description: String!,
        price: Float!
    }

    type Cart {
        id: ID!,
        product: Product!,
        quantity: Int!
    }

    type Order {
        id: ID!,
        email: String!,
        phone: String,
        date: String!,
        location: String!,
        comment: String
    }

    type Query {
        products: [Product],
        orders: [Order],
    }

    type Mutation {
        createProduct(  imagePath: String!,
                        title: String!,
                        description: String!,
                        price: Float!
                                            ): Product!,
        
        placeNewOrder(
                    email: String!,
                    phone: String,
                    date: String!,
                    location: String!,
                    comment: String,
                                    ): Order!,
        },
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };


