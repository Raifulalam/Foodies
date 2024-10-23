const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 5000
const connectDB = require('./db')
const userRoutes = require('./routes/userRoutes')
const Displaydata = require('./routes/DisplayRoutes')


//important for all 
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next();

})
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Welcome to our new server')
})
app.listen(port, () => {
    console.log('Server is running on port 5000')
})



app.use('/api', require('./routes/userRoutes'));
app.use('/api', require('./routes/DisplayRoutes'));


connectDB();

const uri = 'mongodb://localhost:27017/foodie';
mongoose.connect(uri)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err))
