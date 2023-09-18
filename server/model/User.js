const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    certificateIds: [{type : mongoose.Schema.Types.ObjectId, ref: "Certificate"}]
},{
    timestamps: true
});

module.exports = mongoose.model('User',User);