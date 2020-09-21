const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.use('/',(req, res, next) => {
    console.log(adminData.products);
    res.sendFile(path.join(rootDir,'views','shop.html'));
}); 
// __dirname will locate to the route folder in this project
module.exports = router; 

