const express = require('express');
const exphbs  = require('express-handlebars');
//const bodyParser = require('body-parser');
const mysql = require('mysql');
const favicon = require('serve-favicon');

require('dotenv').config();

const app = express();
const port = 5000;

// Parsing middleware
// Parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false })); // Remove
app.use(express.urlencoded({extended: true})); // New
//
//Parse application/json
//app.use(bodyParser.json()); // Remove
app.use(express.json()); // New

app.use(favicon(__dirname + '/img/favicon.ico'));
// Static Files
app.use(express.static('public'));

//app.use(favicon(path.join('/img/favicon.ico')));
// Templating Engine
app.engine('hbs', exphbs({ extname: '.hbs' })); 
app.set('view engine', 'hbs');


// Routes
const routes = require('./sever/routes/user');
const { ExpressHandlebars } = require('express-handlebars');
app.use('/', routes);



// Listen on port 5000
app.listen(port, () => console.log(`Listening on port ${port}`));