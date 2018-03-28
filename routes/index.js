var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');
var User = require('../models/user');

var Product = require('../models/product');
var Order = require('../models/order');

/* GET home page. */
router.get('/', function(req, res, next) {
  var successMsg = req.flash('success')[0];
  Product.find(function(err, docs) {
    var productChunks = [];
    var chunkSize = 3;
    // console.log("docs: " +docs +"length: " + docs.length);
    for (var i = 0; i < docs.length; i += chunkSize) {
      productChunks.push(docs.slice(i, i + chunkSize));
    }
    console.log(req.session);
    if(docs == productChunks) {console.log("TRUE")};
    res.render('shop/index', {
      title: 'ミルク MIRUKU',
      products: productChunks,
      successMsg: successMsg,
      noMessages: !successMsg
    });
  });
});

router.get('/add-to-cart/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  console.log(req.session);
  Product.findById(productId, function(err, product) {
    if (err) {
      return res.redirect('/');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    res.redirect('/');
  });
});

router.get('/reduce/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.reduceByOne(productId);
  req.session.cart = cart;
  res.redirect('/shopping-cart');
});

router.get('/remove/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.removeItem(productId);
  req.session.cart = cart;
  res.redirect('/shopping-cart');
});

router.get('/shopping-cart', function(req, res, next) {
  if (!req.session.cart) {
    return res.render('shop/shopping-cart', {
      products: null
    });
  }
  var cart = new Cart(req.session.cart);
  res.render('shop/shopping-cart', {
    products: cart.generateArray(),
    totalPrice: cart.totalPrice
  });
});

router.get('/order', function(req, res, next) {
  // router.get('/checkout', isLoggedIn, function(req, res, next) {
  if (!req.session.cart) {
    return res.redirect('/shopping-cart');
  }
  var cart = new Cart(req.session.cart);
  var errMsg = req.flash('error')[0];
  res.render('shop/order', {
    products: cart.generateArray(),
    total: cart.totalPrice,
    errMsg: errMsg,
    noError: !errMsg
  });
});

router.post('/order', function(req, res, next) {
  if (!req.session.cart) {
    return res.redirect('/shopping-cart');
  }
  var cart = new Cart(req.session.cart);

  var order = new Order({
    user: req.user,
    cart: cart,
    email: req.body.email,
    name: req.body.name,
    phone: req.body.name,
    delivery: req.body.delivery,
    comment: req.body.comment
  });

  var html = '<p><strong>Name: ' + req.body.name + '</strong></p><p>' + cart;

  var api_key = 'key-3d6721979268461abb7379a88aa07941';
  var domain = 'sandbox64d6a785450349a38522b8b556fd86ce.mailgun.org';
  var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
  var data = {
    from: 'Excited User <me@samples.mailgun.org>',
    to: order.email, // For testing, replace with one actually receiving.
    subject: 'Thank You For Your Order',
    // text: 'Testing some Mailgun awesomeness!',
    html: html
  };
  

  order.save(function(err, result) {
    if(err) {
      console.log(err);
    } else {
      
      mailgun.messages().send(data, function (error, body) {
        if(err) {
          console.log(err);
        }
        req.flash('success', 'Purchase made successfully!');
        req.session.cart = null;
        res.redirect('/');

        console.log(body);
      });
    }
  });
});

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.session.oldUrl = req.url;
  res.redirect('/user/signin');
}