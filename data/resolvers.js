const prepare = (products) => {
    o._id = o._id.toString()
    return o
  }

export const resolvers = {
    Query: {
      products: async (parent, args, { Product }) => {
        const products = await Product.find()
        return products.map(prepare)
      },
    },
    Mutation: {
      createProduct: async (parent, args, { Product }) => {
        return prepare(await new Product(args).save())
      },
      newOrder: async (parent, args, { Order }) => {
        return prepare(await new Order(args).save())
      },
    }
}
