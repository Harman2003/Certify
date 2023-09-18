const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Certificate = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event"
    },
    organisationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Organisation"
    }
},{
    timestamps: true
});

module.exports = mongoose.model('Certificate',Certificate);