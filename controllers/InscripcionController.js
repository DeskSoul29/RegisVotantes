var mongoose = require("mongoose");
var Inscrip = require("../models/Inscripcion");
var lugVot = require("../models/LugVotaciones");

var inscripcionController = {};

inscripcionController.most = function (req, res) {
  res.render("../views/registraduria/index");
};

inscripcionController.most3 = function (req, res) {
  res.render("../views/inscripCed/index");
};

inscripcionController.show = function (req, res) {
  Inscrip.findOne({ cedula: req.body.cedula }).exec(function (
    err,
    inscripciones
  ) {
    if (err) {
      console.log("Error: ", err);
      return;
    }

    lugVot.find({}).exec(function (err, lugVot) {
      if (err) {
        console.log("Error: ", err);
        return;
      }
      res.render("../views/inscripCed/index", {
        inscripciones: inscripciones,
        lugVot,
      });
    });
  });
};

inscripcionController.update = function (req, res) {
  let body = req.body;
  Inscrip.updateOne(
    { cedula: body.cedula },
    {
      $set: {
        lugarvotacion: body.lugarvotacion,
      },
    },
    function (error, info) {
      if (error) {
        res.json({
          resultado: false,
          msg: "No se pudo modificar el cliente",
          err,
        });
      } else {
        res.render("../views/inscripCed/show", { info: req.body });
      }
    }
  );
};

module.exports = inscripcionController;
