var mongoose = require('mongoose');

var searchSchema = new mongoose.Schema({
    
   createdOn: {
        type: Date,
        "default": Date.now
    }
});

mongoose.model('Search', searchSchema);
