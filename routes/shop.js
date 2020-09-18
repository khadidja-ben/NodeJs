const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();

router.use('/',(req, res, next) => {
    res.sendFile(path.join(rootDir,'views','shop.html'));
}); 
// __dirname will locate to the route folder in this project
module.exports = router; 
