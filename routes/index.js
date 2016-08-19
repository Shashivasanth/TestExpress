var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
        res.send('HomePage');
});

router.get('/aboutus', function(req, res){
        res.send('Hybrid Team ');
});

 module.exports = router;
