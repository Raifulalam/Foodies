const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://raifulalam0123:w6uTAm2A0cozwABk@foodie.2xijm.mongodb.net/Foodie?retryWrites=true&w=majority&appName=Foodie';
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/foodie', { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
};
module.exports = connectDB;