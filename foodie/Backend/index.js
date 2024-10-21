const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 5000
const connectDB = require('./db')
const userRoutes = require('./routes/userRoutes')

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

// app.get('/api/user',
//     async (req, res) => {
//         try {
//             const user = await User.find()
//             res.status(200).json(user)
//         } catch (err) {
//             res.status(500).json({ message: err.message })
//         }

//     })

// app.get('/api/User/:id', async (req, res) => {
//     try {
//         // const {id} = req.params
//         const User = await User.findById(req.params.id)
//         if (!User) return res.status(404).json({ message: 'User not found' })
//         res.status(200).json(User)
//     } catch (err) {
//         res.status(500).json({ message: err.message })
//     }
// })

app.use('/api', require('./routes/userRoutes'));
// app.post('/api/user',

//     async (req, res) => {
//         try {
//             const User = await User.create(req.body)
//             res.status(200).json(User)
//         }
//         catch (error) {
//             res.status(500).json({ message: error.message })
//         }

//     })

connectDB();

const uri = 'mongodb://localhost:27017/foodie';
mongoose.connect(uri)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err))
