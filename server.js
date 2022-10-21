//core module
const path = require('path');

//3rd party packages
const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express(); //request handler

app.set('view engine', 'ejs'); //compile dynamic templates
app.set('views', 'views'); //where to find these templates

app.use(bodyParser.urlencoded({ extended: true })); //parser middleware
app.use(express.static(path.join(__dirname, 'public'))); // static middleware

app.use('/admin', adminRoutes); //outsourced route
app.use(shopRoutes); //outsourced route

app.use(errorController.get404);

app.listen(3000);