const express = require('express');
const router = express.Router();
const { registerUser, loginUser, questionnaire, getUserPlans } = require('../controllers/userController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/questionnaire', questionnaire);
router.get('/plans/:email', getUserPlans);

module.exports = router;
