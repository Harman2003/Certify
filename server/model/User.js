const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    organisationId:{
        type: String,
        // required: true
    },
    EthAdress:{
        type: String,
        // required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    role:{
        type: Boolean,
        required: true
    },
    certificateIds: [{type : mongoose.Schema.Types.ObjectId, ref: "Certificate"}],
    eventIds: [{type: mongoose.Schema.Types.ObjectId, ref: "Event"}]
},{
    timestamps: true
});

module.exports = mongoose.model('User',User);