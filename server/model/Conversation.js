const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const product = require("./product")

const conversationSchema = new Schema({
    input:{
        type:String,
        required:true,
    },
    output: {
        message: { type: String },
        catalog: [{
            name: {
                type:String
            },
            pid: {
               type:String 
            },
            link: {
                type:String
            },
            image: {
                type:String
            },
            rating: {
                type:Number
            },
            stars: {
                type:Number
            },
            price: {
                type:String
            }
        }]
    }
},{
    timestamps:true,
});

module.exports = mongoose.model("Conversation",conversationSchema);