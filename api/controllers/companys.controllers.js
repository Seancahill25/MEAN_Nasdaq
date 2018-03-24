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

  var id = req.params.id;
  console.log("GET id", id);
    
  Companys
      .findOne({
          _id : id 
      }, function(err, doc){
          var response = {
              status: 200,
              message: doc
          };
          if(!doc) {
              response.status = 404;
              response.message = {
                  "message": "Company not found"
              };
          }
          else if(err){
              console.log("Error finding company");
              response.status = 500;
              response.message = err;
          } 
          res
              .status(response.status)
              .json(response.message); 
       });
};

