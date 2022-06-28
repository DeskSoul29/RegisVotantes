var mongoose = require("mongoose");
var Voto = require("../models/Voto");
var cand = require("../models/candidato");
var Inscrip = require("../models/Inscripcion");

var votosController = {};

votosController.most = function (req, res) {
  res.render("../views/votaciones/index");
};

votosController.save = function (req, res) {
  var voto = new Voto({
    _id: mongoose.Types.ObjectId(),
    candidato: req.body.candidato,
    pais: req.body.pais,
    lugarvotacion: req.body.lugarvotacion,
    departamento: req.body.departamento,
  });

  voto.save(function (err) {
    if (err) {
      console.log("Error: ", err);
      return;
    }
    let body = req.body;
    Inscrip.updateOne(
      { cedula: body.cedula },
      {
        $set: {
          voto: "TRUE",
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
          res.render("../views/votaciones/show", { info: req.body });
        }
      }
    );
  });
};

votosController.show = function (req, res) {
  Inscrip.findOne({ cedula: req.body.cedula }).exec(function (
    err,
    inscripciones
  ) {
    if (err) {
      console.log("Error: ", err);
      return;
    }
    cand.find({}).exec(function (err, cand) {
      if (err) {
        console.log("Error: ", err);
        return;
      }
      res.render("../views/votaciones/index", {
        inscripciones: inscripciones,
        cand,
      });
    });
  });
};

module.exports = votosController;
