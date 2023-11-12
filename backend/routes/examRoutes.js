const express = require("express");
const examController = require("../controllers/examController.js");
const router = express.Router();

router.get("/exams", examController.getExams);
router.post("/questions", examController.addQuestion);

module.exports = router;