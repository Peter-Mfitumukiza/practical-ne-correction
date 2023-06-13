const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    nationalId: {
        type: Number,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    dateOfCreation: {
        type: Date,
        default: Date.now()
    }
})