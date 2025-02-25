const express = require("express");
const router = express.Router();
const user = require("../controllers/userController");
router.get("/:userId/getUser", user.getUserForPayment);
router.post("/start", user.startUserJourney);
router.post("/:userId/select-frame", user.selectFrame);
router.post("/:userId/select-number", user.createNoOfCopies);
router.post("/save-images", user.saveImages);

module.exports = router;
