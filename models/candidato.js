var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var candSchema = new Schema({
  nombre: { type: String, required: true, max: 100 },
  partidoPolitico: { type: String, required: true, max: 100 },
});

module.exports = mongoose.model("candidatos", candSchema);
