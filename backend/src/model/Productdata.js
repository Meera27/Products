// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/ProductDb');
// const Schema = mongoose.Schema;

// var NewProductSchema = new Schema({
//     productId : Number,
//     productName : String,
//     productCode : String,
//     releaseDate : String,
//     description :String,
//     proce : Number,
//     starRating : Number,
//     imageUrl :String,
// });
// var Productdata = mongoose.model('product', NewProductSchema);



const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ProductDb');

const Schema = mongoose.Schema;
const NewProductSchema = new Schema({
    productId : Number,
    productName : String,
    productCode : String,
    releaseDate : String,
    descripton : String,
    price : Number,
    starRating : Number,
    imageUrl : String
});

var ProductData = mongoose.model('product' , NewProductSchema);

module.exports=ProductData;


