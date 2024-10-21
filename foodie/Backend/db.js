const { MongoClient } = require('mongodb');
const mongoURI = 'mongodb://localhost:27017/foodie';

const connectDB = async () => {
    try {
        const client = new MongoClient(mongoURI);
        await client.connect();
        console.log('MongoDB connected');

        const db = client.db(); // Use the default database from the URI
        const foodItemsCollection = db.collection('fooditems');

        // Fetch data from the collection
        const data = await foodItemsCollection.find().toArray();
        if (data.length === 0) {
            console.log('No data found in fooditems collection');
        } else {
            // console.log('Fetched data:', data);
        }

        // Close the connection
        // await client.close();
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
};

module.exports = connectDB;
