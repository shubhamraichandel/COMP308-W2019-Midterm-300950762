/***************************************************
     * File Name : index.js
     * Author: Shubham Raichandel 
     * StudentID: 300950762
     * Web App name: COMP308-W2019-MidTerm-300950762
****************************************************/



// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
