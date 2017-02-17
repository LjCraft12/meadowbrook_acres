const express = require('express');
const router  = express.Router();

// Register Route
router.get('/register', (req, res, next) => {
    res.send('Hello from register');
});

// Authenticate Route
router.post('/authenticate', (req, res, next) => {
    res.send('Hello from auth');
});

// Profile Route
router.get('/profile', (req, res, next) => {
    res.send('Hello from profile');
});

// Validate Route
router.get('/validate', (req, res, next) => {
    res.send('Hello from validate');
});

module.exports = router;