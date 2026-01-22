const express = require("express");
const router = express.Router();

const { saveTest,getAllTests } = require("../controllers/testcontroller");



// ROUTES

router.post("/", saveTest);
router.get("/", getAllTests);
module.exports = router;
