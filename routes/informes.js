var express = require("express");
var router = express.Router();

var informes = require("../controllers/InformeController.js");

router.get("/", informes.most);

module.exports = router;
