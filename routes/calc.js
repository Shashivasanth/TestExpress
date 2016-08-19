var express=require("express");
var parser = require ('query-string-parser');
var mongoose = require('mongoose');

var router=express.Router();
//url = '/add/:n1/:n2';
router.get('/add/:n1/:n2', function(req, res){
// var params = url.parse(req.url, true);
//   var n1 = params.n1;
//   console.log(n1);

    //var result = String((param1+param2));
    //res.send('sum is '+result);
    var n1=parseInt(req.params.n1);
    var n2=parseInt(req.params.n2);

    res.send(String(n1+n2));

})
router.get('/sub/:n1/:n2', function(req, res){
    var n1=parseInt(req.params.n1);
    var n2=parseInt(req.params.n2);

    res.send(String(n1-n2));

})
router.get('/multiply/:n1/:n2', function(req, res){
    var n1=parseInt(req.params.n1);
    var n2=parseInt(req.params.n2);

    res.send(String(n1*n2));

})
router.get('/div/:n1/:n2', function(req, res){
    var n1=parseInt(req.params.n1);
    var n2=parseInt(req.params.n2);

    res.send(String(n1/n2));

})
module.exports=router;
