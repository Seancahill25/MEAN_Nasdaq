var express = require('express');
var router = express.Router();

var ctrlCompanys = require('../controllers/companys.controllers.js');

router
    .route("/companys")
    .get(ctrlCompanys.getAllCompanys);
    
router
    .route('/companys/:companyId')
    .get(ctrlCompanys.getOneCompany);

module.exports = router;
