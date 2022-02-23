const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personal_info_schema = new Schema({
    fullname: {
        type: String,
        // required: [true, 'Fullname is required!'],
        unique: true,
    },
    username: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        // required: [true, 'Email is required!']
        unique: true,
    },
    profile_image: {
        type: String,
        unique: true,
    },
    cv: {
        type: String,
        unique: true,
    }
});

const pers_info = mongoose.model("pers_info", personal_info_schema);
module.exports = pers_info;