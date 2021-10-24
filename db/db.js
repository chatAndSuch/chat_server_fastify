// getting-started.js
const mongoose = require('mongoose');
const room = require('../models/room')
const user = require('../models/user')

const Room = mongoose.model('Room', room);


async function connect(callback) {
    await mongoose.connect('mongodb+srv://temp:temp@cluster0.zzoh3.mongodb.net/room?retryWrites=true&w=majority');
}

const newRoom = async (roomID, name, user, log)=>{
    const room = new Room({ room_id: roomID, name: name, users:[user], log});
    await room.save()
}


module.exports = {connect, newRoom}