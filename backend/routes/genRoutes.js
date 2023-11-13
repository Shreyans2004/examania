const express = require("express");
const genController = require("../controllers/genController.js");
const authController = require('../controllers/authController.js');
const router = express.Router();

router.get("/exams", genController.getExams);
router.post("/questions", genController.addQuestion);
router.get("/tests", authController.verifyUser, genController.getTests);
router.get("/test-report", authController.verifyUser, genController.getTestResults);
module.exports = router;