const express = require('express');
const router = express.Router();

router.post('/foodList', (req, res) => {
    try {
        res.send([global.foodList, global.foodCatList])
    } catch (error) {
        res.status(500).send({ message: error.message })


    }
})
module.exports = router;