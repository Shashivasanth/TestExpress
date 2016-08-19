var  express = require('express');
var app = express();

//var indexroutes = require('./routes/index');
//var userroutes = require('./routes/users');
var indexroutes=require('./routes/controller.js');
var filter = require ('./filter.js');
//DB SetUp
var mongoose = require('mongoose');
var MessageModel = require('./modal/GmailMessageModel');
var port = +process.env.PORT || 5000;
var db ='mongodb://user:password@ds161475.mlab.com:61475/gmaildb';

app.use('/', indexroutes);
//app.use('/users',userroutes);
//app.use('/calc',calc);

app.listen('8080', function(err){
    console.log('Server started at port 8085');
});
