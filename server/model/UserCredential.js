const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Session = require("./Session");
// const Product = require("./product");

const UserCredential = new Schema({
  fullname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  SessionIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Session" }],
  refreshToken: String,
});

module.exports = mongoose.model('User Credential', UserCredential);