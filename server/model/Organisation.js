const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Organisation = new Schema({
    organisationName: {
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
    eventIds: [{type: mongoose.Types.ObjectId , ref: "Event"}]
},{
    timestamps: true
});

module.exports = mongoose.model('Organisation',Organisation);