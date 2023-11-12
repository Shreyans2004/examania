const express = require("express");
const testController = require("../controllers/testController.js");
const authController = require('../controllers/authController.js');
const router = express.Router();

router.post("/start",authController.verifyUser, testController.startTest);
router.get("/questions", testController.getTestQuestions);
router.get("/questions/:id", testController.getQuestion);
router.post("/results", testController.submitTest);
module.exports = router;