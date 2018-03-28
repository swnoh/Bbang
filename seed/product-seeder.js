var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB_URI);

var products = [
  new Product({
    imagePath: 'https://mirukuottawacom.files.wordpress.com/2018/01/img_6317.jpg?w=461&h=446',
    title: 'Bulgogi Quiche',
    description: '-Bulgogi is Korean Traditional beef dish which is marinated in sweet soy sauce',
    price: 4.25
  }),
  new Product({
    imagePath: 'https://mirukuottawacom.files.wordpress.com/2018/01/3b2dc945752bb3f8e6a1255605_original_.jpg?w=476&h=476&crop=1',
    title: 'Matcha Red bean Crepe',
    description: '– Using organic high quality Matcha – Fresh and unique taste with Redbean',
    price: 209
  }),
  new Product({
    imagePath: 'https://mirukuottawacom.files.wordpress.com/2018/01/img_6395.jpg?w=533&h=336',
    title: 'Sittori Cheese Terrine(Plain / Matcha)',
    description: '-Gluten free, Soft and smooth like ice cream, Rich Cheese taste, not Cheese scent or just flavor',
    price: 33
  }),
  new Product({
    imagePath: 'https://mirukuottawacom.files.wordpress.com/2017/10/dddd.jpg?w=364&h=258',
    title: 'Royal Milk Tea Bottle',
    description: '-Real Japanese Milk tea, Real Milk, not a milk powder+water which others used to do, Use High quality black tea leaves',
    price: 12
  }),
  new Product({
    imagePath: 'https://mirukuottawacom.files.wordpress.com/2017/10/20151209-main.jpg',
    title: "Fresh Caramel Candy",
    description: "NO artificial ingredients",
    price: 28
  }),
  new Product({
    imagePath: 'https://mirukuottawacom.files.wordpress.com/2018/01/25008526_171981873397376_3738298268392620032_n.jpg',
    title: "Banana Chocolate Cube",
    description: "Fresh Banana & Chocolate",
    price: 5
  })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}