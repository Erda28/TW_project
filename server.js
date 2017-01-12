var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var app = express();
app.use(bodyParser.json());
app.use(cors());

var nodeadmin = require('nodeadmin');
app.use(nodeadmin(app));

// REST methods
app.get('/reservations', function(req,res){
    res.status(200).send([{city:"Predeal",date:"10nov2017"},{city:"Brasov",date:"17may2017"},{city:"Galati",date:"19iun2017"}]);
});

app.listen(process.env.PORT);