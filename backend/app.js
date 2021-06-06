const express = require('express');
const ProductData = require('./src/model/Productdata');
const cors = require('cors');
var bodyparser = require('body-parser');
var app = express();
app.use(cors());
app.use(bodyparser.json());
app.get('/products',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods : GET,POST,PATCH,PUT,DELETE,OPTIONS");
    ProductData.find()
                .then(function(products){
                    res.send(products);
                });
});
app.post('/insert',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods : GET,POST,PATCH,PUT,DELETE,OPTIONS");
    console.log(req.body);
    var product = {
        productId : req.body.product.productId,
    productName : req.body.product.productName,
    productCode : req.body.product.productCode,
    releaseDate : req.body.product.ProductData,
    description :req.body.product.description,
    price : req.body.product.price,
    starRating : req.body.product.starRating,
    imageUrl : req.body.product.imageUrl,
    }
    var product = new ProductData(product);
    product.save();
});
app.listen(1514,function(){
    console.log("Listening to port 1514");
});




// const express = require("express");
// const ProductData = require ('./src/model/Productdata');
// const cors = require("cors");
// const bodyparser = require("body-parser");

// const app = express();
// app.use(cors());
// app.use(bodyparser.json());
// // express.urlencoded({extended:true});
// app.get('/products' , function (req,res){
//     res.header("Access-control-Allow-Origin" , "*");
//     res.header("Access-control-Allow-Methods : GET,POST,PATCH,PUT,DELETE,OPTIONS");

//     ProductData.find()
//     .then(function(products){ 
//         res.send(products);
//     });
// });

// app.post('/insert' , function (req,res){
//     res.header("Access-control-Allow-Origin" , "*");
//     res.header("Access-control-Allow-Methods : GET,POST,PATCH,PUT,DELETE,OPTIONS");
//     console.log(req.body);

//     var product = {
//         productId : req.body.product.productId,
//         productName : req.body.product.productName,
//         productCode : req.body.product.productCode,
//         releaseDate : req.body.product.releaseDate,
//         descripton : req.body.product.descripton,
//         price : req.body.product.price,
//         starRating : req.body.product.starRating,
//         imageUrl : req.body.product.imageUrl
//     }

//     var product = new ProductData(product);
//     product.save();
// });

// app.listen(1514,function(){
//     console.log('listening to port 1514');
// });