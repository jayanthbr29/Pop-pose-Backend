const express = require("express");
const router = express.Router();
const user = require("../controllers/userController");
router.get("/:userId/getUser", user.getUserForPayment);
router.post("/start", user.startUserJourney);
router.post("/:userId/select-frame", user.selectFrame);
router.post("/:userId/select-number", user.createNoOfCopies);
router.post("/save-images", user.saveImages);
router.get("/getAllUsers", user.getAllUsers);
router.post("/provideConsent/:userId", user.provideConsent);
router.get("/getImagesByUserId/:userId", user.getImagesByUserId);
module.exports = router;
