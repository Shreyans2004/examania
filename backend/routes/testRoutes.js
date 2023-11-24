const express = require("express");
const testController = require("../controllers/testController.js");
const authController = require('../controllers/authController.js');
const router = express.Router();

router.post("/start-test",authController.verifyUser, testController.startTest);
router.post("/questions", testController.getTestQuestions);
router.get("/questions/:id", testController.getQuestion);
router.post("/submit-test", testController.submitTest);
module.exports = router;