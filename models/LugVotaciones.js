var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var LugSchema = new Schema({
  nombrelugar: { type: String, required: true, max: 100 },
  direccion: { type: String, required: true, max: 100 },
  pais: { type: String, required: true, max: 100 },
  departamento: { type: String, max: 500 },
});

module.exports = mongoose.model("lugarvotacions", LugSchema);
