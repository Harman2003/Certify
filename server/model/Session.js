const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Conversation = require("./Conversation");

const Session = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    sessionEndTime: {
      type: Date,
    },
    conversationIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Conversation' }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Session", Session);
