var express = require("express");
var router = express.Router();

var vot = require("../controllers/VotarController.js");

router.get("/", vot.most); //Index
router.post("/show", vot.show);
router.post("/save", vot.save);
module.exports = router;
