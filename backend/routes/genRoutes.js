const express = require("express");
const genController = require("../controllers/genController.js");
const router = express.Router();

router.get("/exams", genController.getExams);
router.post("/questions", genController.addQuestion);

module.exports = router;