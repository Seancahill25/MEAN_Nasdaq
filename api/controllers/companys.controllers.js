var mongoose = require('mongoose');
var Companys = mongoose.model('Companys');


module.exports.getAllCompanys = function(req, res){
  console.log(req.query);
  
  var offset = 0;
  var count = 3288;
    
  if(req.query && req.query.offset) {
      offset = parseInt(req.query.offset, 10);
  }
  
  if(req.query && req.query.count) {
      count = parseInt(req.query.count, 10);
  }
  
  Companys
    .find() 
    .skip(offset) 
    .limit(count)
    .exec(function(err, companys){
        if(err){
            console.log("Error finding companys");
            res
              .status(500)
              .json(err);
        } else{
            console.log("Found companys ", companys.length);
            res
              .json(companys);
        }
    }); 
};

module.exports.getOneCompany = function(req, res){
  
   var id = req.params.companyId;
        console.log("GET companyId", id);
        
        Companys
        .findById(id)
        .exec(function(err, doc) {
            var response = {
                status : 200,
                message : doc
            };
            if (err) {
                console.log("Error finding company");
                response.status = 500;
                response.message = err;
            } else if(!doc) {
                console.log("companyId not found in database", id);
                response.status = 404;
                response.message = {
                    "message" : "company ID not found " + id
                };
            }  
            res
            .status(response.status)
            .json(response.message);
        });

};

