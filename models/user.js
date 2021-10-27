const mongoose = require('mongoose');
const { Schema } = mongoose;

const user = new Schema({
    username:String,
    hashword: String,
    avatar:String
  });

module.exports = user