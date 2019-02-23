/***************************************************
     * File Name : books.js
     * Author: Shubham Raichandel 
     * StudentID: 300950762
     * Web App name: COMP308-W2019-MidTerm-300950762
****************************************************/
let mongoose = require('mongoose');

// create a model class
let gamesSchema = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('books', gamesSchema);
