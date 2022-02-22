const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personal_info_schema = new Schema({
    fullName: {
        type: String,
        required: [true, 'Fullname is required!'],
    },
    username: {
        type: String,
    },
    email: {
        type: String,
        required: [true, 'email is required!']
    },
    profile_image: {
        type: String,
    },
    cv: {
        type: String
    }
});

const pers_info = mongoose.model("pers_info", personal_info_schema);
module.exports = pers_info;