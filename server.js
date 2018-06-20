import { graphqlExpress, graphiqlExpress } from "graphql-server-express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import { schema } from "./data/schema";

const express = require("express");
const path = require('path');
const server = express();
const PORT = process.env.PORT || 5000;
const url = process.env.DATABASEURL;

mongoose.connect(url, function(err) {
  if (err) throw err;
  console.log("Successfully connected");
});

const productSchema = mongoose.Schema({
  imagePath: Array,
  title: Array,
  description: String,
  price: Array,
  checkedMatchPrice: Boolean
});

const orderSchema = mongoose.Schema({
  email: String,
  phone: String,
  date: String,
  location: String,
  comment: String
});

const Product = mongoose.model("Product", productSchema);
const Order = mongoose.model("Order", orderSchema);

server.use("*", cors({ origin: "mirukufresh.herokuapp.com" }));
server.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress({ schema, context: { Product, Order } })
);

server.use(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "/graphql"
  })
);

server.use(express.static(path.join(__dirname, 'client/build')));

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

server.listen(PORT, () =>
  console.log(`GraphQL Server is now running on http://localhost:${PORT}`)
);
