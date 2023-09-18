const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    size: {
        type: String,
        enum: ["XS", "S", "M", "L", "XL"],
        default: "M"
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Unisex"],
        default: "Unisex"
    },
    season: {
        type: String,
        enum: ["Summer", "Winter", "All"]
    },
    tags: [String],
    images: [{ url: String, alt_text: String }],
    rating: {
        type: Number,
        min: [1, "Minimum rating >= 1"],
        max: [10, "Maximum rating <= 10"]
    }
});

module.exports = mongoose.model("Products",productSchema);