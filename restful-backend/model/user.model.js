const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    nationalId:{
        type: Number,
        required: true
    },
    Password:{
        type: String,
        required: true
    },
    dateOfCreation: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('User', schema);