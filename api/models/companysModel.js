var mongoose = require('mongoose');

var companysSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    symbol: {
        type: String,
        required: true
    },
    lastSale:{
        type: Number,
        required: true
    },
        marketCap:{
        type: Number,
    },
    sector:{
        type: String
    },
    industry:{
        type: String
    } 
});

mongoose.model('Companys', companysSchema, 'companys');
