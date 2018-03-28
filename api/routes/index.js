var express = require('express');
var router = express.Router();

var ctrlCompanys = require('../controllers/companys.controllers.js');
var ctrlUsers = require("../controllers/users.controllers.js");

router
    .route("/companys")
    .get(ctrlCompanys.getAllCompanys);
    
router
    .route('/companys/:companyId')
    .get(ctrlCompanys.getOneCompany);
    
router
    .route("/users/register")
    .post(ctrlUsers.register);
    
router
    .route("/users/login")
    .post(ctrlUsers.login);

module.exports = router;
