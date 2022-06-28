var express = require("express");
var router = express.Router();

var index = require("../controllers/InscripcionController.js");

router.get("/", index.most); //Index

module.exports = router;
