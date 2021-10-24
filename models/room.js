const mongoose = require('mongoose');
const { Schema } = mongoose;

const room = new Schema({
    room_id:String,
    name: String,
    users: Array,
    log:Array,
  });

module.exports = room