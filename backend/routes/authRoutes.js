const express = require('express');
const authController = require('../controllers/authController.js');
const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/logout", authController.logout); 
router.get("/verify-user", authController.verifyUser);

module.exports = router;
