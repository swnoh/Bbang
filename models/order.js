var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    cart: {type: Object, required: true},
    email: {type: String, required: true},
    name: {type: String, required: true},
    phone: {type: String, required: true},
    delivery: {type: String, required: true},
    comment: {type: String, required: false}
});

module.exports = mongoose.model('Order', schema);