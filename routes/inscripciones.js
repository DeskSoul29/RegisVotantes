var express = require("express");
var router = express.Router();

var inscripCed = require("../controllers/InscripcionController.js");

router.get("/", inscripCed.most3);
router.post("/", inscripCed.show);
router.post("/update", inscripCed.update);

module.exports = router;
