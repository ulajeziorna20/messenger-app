const mongoose = require('mongoose')



const RegisterSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    confirmPassword: {
        type: String,
        required: true
    },
    image: String,
}, { timestamps: true })



module.exports = mongoose.model('user', RegisterSchema)