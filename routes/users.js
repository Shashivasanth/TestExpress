var express = require('express');

var router = express.Router();

router.get('/Shashi', function(req, res){
    var  param1 = req.queryString('param1');
    console.log('param---'+ param1);
    res.send('shashi page');
});

router.get('/Sourabh', function(req, res){
        res.send('sons page ');
});

 module.exports = router;
