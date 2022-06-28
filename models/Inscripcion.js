var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var InscripSchema = new Schema({
  cedula: { type: Number, required: true, unique: true },
  nombres: { type: String, required: true, max: 100 },
  apellidos: { type: String, required: true, max: 100 },
  municipionacimiento: { type: String, required: true, max: 100 },
  fechanacimiento: { type: Date, required: true },
  municipioresidencia: { type: String, max: 100 },
  Pais: { type: String, required: true, max: 100 },
  lugarvotacion: { type: String, max: 500 },
  departamentoresidencia: { type: String, max: 100 },
  voto: { type: String, max: 10 },
});

module.exports = mongoose.model("ciudadanos", InscripSchema);
