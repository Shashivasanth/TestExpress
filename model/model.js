var mongoose = require('mongoose');
var items = mongoose.Schema({
   itemid: String,
   itemname: String,
});

module.exports = mongoose.model('items', items );
