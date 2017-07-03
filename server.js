// NPM Package Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var exphbs = require('express-handlebars');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Sets up the Handlebars as default view engine
// =============================================================
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Servers public content such as CSS Javascript required in the HTML files
app.use(express.static(path.join(__dirname,'public')));

// File Dependencies
// =============================================================
var mainRoute = require('./controllers/burgers_controller.js');

// Lets express know which file to forward certain routes to
// =============================================================
app.use('/', mainRoute);

// Starts listening to the server port
app.listen(PORT,()=>{
    console.log('Server listening on PORT ' + PORT);
});
