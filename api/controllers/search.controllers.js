var mongoose = require('mongoose'); 
var Search = mongoose.model('Search');

module.exports.getSearch = function(req, res) {
    
    Search
        .find()
        .exec(function(err, doc) {
           if (err) {
                console.log("Error finding searches");
                res
                    .status(500)
                    .json(err);
                }
                console.log("Found searches ", doc);
                res
                    .json(doc);  
            });
};

module.exports.saveSearch = function(req, res) {
    var symbol = req.body.symbol;
    var createdOn = new Date();
    
    Search.create({
        symbol : symbol,
        createdOn : createdOn
    }, function(err, doc){
            if (err) {
                console.log("Error saving search");
                res.status(500).json(err);
            }
            else {
                console.log("Returned ", doc);
                res
                    .json(doc);  
            }
         });
};