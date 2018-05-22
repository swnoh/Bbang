import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

const typeDefs = `
    type Product {
        id: ID!,
        imagePath: [String]!,
        title: [String]!,
        description: String!,
        price: [String]!,
        checkedMatchPrice: Boolean
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
        createProduct(  imagePath: [String]!,
                        title: [String]!,
                        description: String!,
                        price: [String]!,
                        checkedMatchPrice: Boolean!
                                            ): Product!,

        updateProduct(  id: ID!,
                        imagePath: [String]!,
                        title: [String]!,
                        description: String!,
                        price: [String]!,
                        checkedMatchPrice: Boolean!
                                            ): Product!,
                                                 
        deleteProduct(  id: ID! ): Product,                                                                           
        
        placeNewOrder(  email: String!,
                        phone: String,
                        date: String!,
                        location: String!,
                        comment: String,
                                        ): Order!,
        },
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };
