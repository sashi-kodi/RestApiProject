var express= require('express');
var  bodyparser = require('body-parser'); 
var mongoose = require('mongoose');

var router= require('./routes');
var app =express();
var port = 3000;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
mongoose.connect('mongodb://sashikodi:omsai28@ds151927.mlab.com:51927/whitebox');
var connection= mongoose.connection;
connection.once('open', function(){
   console.log('mongodb connection is successful'); 
});
app.use('/', router);
app.listen(port);