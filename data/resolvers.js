const prepare = (o) => {
    o._id = o._id.toString()
    return o
  }

export const resolvers = {
    Query: {
      products: async (parent, args, { Product }) => {
        const products = await Product.find()
        return products.map(prepare)
      },
      orders: async (parent, args, { Order }) => {
        const orders = await Order.find()
        return orders.map(prepare)
      },
    },
    Mutation: {
      createProduct: async (parent, args, { Product }) => {
        return prepare(await new Product(args).save())
      },
      updateProduct: async (parent, args, { Product }) => {
        return prepare(await Product.findByIdAndUpdate( args.id, args ))
      },
      placeNewOrder: async (parent, args, { Order }) => {
        const api_key = 'key-3d6721979268461abb7379a88aa07941';
        const domain = 'sandbox64d6a785450349a38522b8b556fd86ce.mailgun.org';
        const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
        
        const data = {
            from: 'Excited User <me@samples.mailgun.org>',
            to: args.email,
            subject: 'Thank You For Your Order',
            text: 'Here is the order detail!\n' + 
                  + 'Phone: ' + args.phone 
                  + 'Date: ' + args.date 
                  + 'Location: ' + args.location 
                  + 'Comment: ' + args.comment, 
        };

        // mailgun.messages().send(data, function (error, body) {
        //     console.log(body);
        // });

        console.log(args);

        return prepare(await new Order(args).save())
      },
    }
}
