const path = require('path');
const express = require('express'); 
const bodyParser = require ('body-parser');

const app = express();
app.set('view engine', 'pug'); 

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false})); // to show the correct writing in the console! 
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminData.router); // app.use('/admin',adminRoutes); means only routes that are under a folder called admin
app.use(shopRoutes); 

app.use((req, res, next) => {
    //console.log('fuck, i am here! ');
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
 
app.listen(5000); 
//const http = require('http');
//const server = http.createServer(app); 
//server.listen(5000); 

