var mongoose = require("mongoose");
var Voto = require("../models/Voto");
var Inscrip = require("../models/Inscripcion");

var InformeController = {};

InformeController.most = function (req, res) {
  Voto.aggregate([
    { $match: { pais: "Colombia" } },
    {
      $group: {
        _id: { candidato: "$candidato", departamento: "$departamento" },
        total: { $sum: 1 },
      },
    },
  ]).exec(function (err, product) {
    consult2(res, product);
  });
};

function consult2(res, product) {
  Voto.aggregate([
    { $match: { pais: { $not: { $eq: "Colombia" } } } },
    {
      $group: {
        _id: { candidato: "$candidato", pais: "$pais" },
        total: { $sum: 1 },
      },
    },
  ]).exec(function (err, product2) {
    consulta3(res, product, product2);
  });
}

function consulta3(res, product, product2) {
  Voto.aggregate([
    { $match: { pais: "Colombia", departamento: "Cundinamarca" } },
    { $group: { _id: { candidato: "$candidato" }, total: { $sum: 1 } } },
  ]).exec(function (err, product3) {
    consulta4(res, product, product2, product3);
  });
}

function consulta4(res, product, product2, product3) {
  Voto.aggregate([
    { $match: { pais: "Colombia" } },
    { $group: { _id: { candidato: "$candidato" }, total: { $sum: 1 } } },
  ]).exec(function (err, product4) {
    consulta4_1(res, product, product2, product3, product4);
  });
}

function consulta4_1(res, product, product2, product3, product4) {
  Voto.aggregate([
    { $match: { pais: "Colombia" } },
    {
      $group: {
        _id: { candidato: "$candidato", departamento: "$departamento" },
        total: { $sum: 1 },
      },
    },
  ])
    .sort({ total: -1, departamento: -1, candidato: -1 })
    .exec(function (err, product4_1) {
      consulta4_2(res, product, product2, product3, product4, product4_1);
    });
}

function consulta4_2(res, product, product2, product3, product4, product4_1) {
  Voto.aggregate([
    { $match: { pais: "Colombia" } },
    {
      $group: {
        _id: { candidato: "$candidato", departamento: "$departamento" },
        total: { $sum: 1 },
      },
    },
  ])
    .sort({ total: 1, departamento: 1, candidato: 1 })
    .exec(function (err, product4_2) {
      consulta5(
        res,
        product,
        product2,
        product3,
        product4,
        product4_1,
        product4_2
      );
    });
}

function consulta5(
  res,
  product,
  product2,
  product3,
  product4,
  product4_1,
  product4_2
) {
  Voto.aggregate([
    { $match: { candidato: "Voto En Blanco", pais: "Colombia" } },
    {
      $group: {
        _id: { candidato: "$candidato", departamento: "$departamento" },
        total: { $sum: 1 },
      },
    },
  ]).exec(function (err, product5) {
    consult5_1(
      res,
      product,
      product2,
      product3,
      product4,
      product4_1,
      product4_2,
      product5
    );
  });
}

function consult5_1(
  res,
  product,
  product2,
  product3,
  product4,
  product4_1,
  product4_2,
  product5
) {
  Inscrip.aggregate([
    { $match: { voto: { $not: { $eq: "TRUE" } }, Pais: "Colombia" } },
    {
      $group: {
        _id: { departamento: "$departamentoresidencia" },
        total: { $sum: 1 },
      },
    },
  ]).exec(function (err, product5_1) {
    res.render("../views/informes/index", {
      product: product,
      product2,
      product3,
      product4,
      product4_1,
      product4_2,
      product5,
      product5_1,
    });
  });
}

module.exports = InformeController;
