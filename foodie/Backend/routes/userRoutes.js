const express = require('express');
const router = express.Router();
const User = require('../models/User.models'); // Fixed spelling from 'modles' to 'models'
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret = "raifulalammohammedfromnepalbirgunj";

// Create User
router.post('/createUser', [
    body('name').isLength({ min: 3 }).withMessage('Name must be at least 3 characters'),
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
], async (req, res) => {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            location: req.body.location
        });
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Login User
router.post('/loginUser', [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const comparePassword = await bcrypt.compare(password, user.password);
        if (!comparePassword) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const data = {
            id: user._id,
            name: user.name,
        };
        const authToken = jwt.sign(data, jwtSecret);
        return res.json({ success: true, authToken });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

module.exports = router;
