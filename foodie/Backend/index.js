const express = require('express')
const app = express()
const connectDB = require('./db')
const FoodItem = require('./modles/foodList')
const port = 5000

const CreateFoodItem = async () => {
    const pizza = new FoodItem({
        name: 'Pizza',
        price: 10.99,
        description: 'A delicious pizza',
        image: 'https://example.com/pizza.jpg',
        category: 'fast/food',
    });
    try {
        await pizza.save()
        console.log('Food item created')
    }
    catch (err) {
        console.error(err)
    }

};

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
const run = () => {
    connectDB()
    CreateFoodItem()
};
run();