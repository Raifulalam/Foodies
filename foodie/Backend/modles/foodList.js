const mongoose = require('mongoose')
const FoodItem = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    restaurant: { type: String, required: false },
    rating: { type: Number, required: false },
    reviews: [{ type: String, required: false }]

});
module.exports = mongoose.model('FoodItem', FoodItem);