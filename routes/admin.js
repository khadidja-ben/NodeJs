const path = require('path');
const express = require('express');
const rootDir = require('../util/path');


const router = express.Router();
const products = [];

// Get method
router.get('/add-product',(req, res, next) => {
    //res.sendFile(path.join(__dirname, '../','views','add-product.html'));
    res.sendFile(path.join(rootDir,'views','add-product.html'));
}); 

// post method 
router.post('/add-product', (req, res, next) => {
    products.push({title: req.body.title });
    res.redirect('/');
});

//module.exports = router; 
exports.router = router;
exports.products = products;

//<form action="/product" => redirecting to the /product page 
//app.use => for all kinds of Http requests 
//app.get => for GET requests 
//app.post => for POST requests 