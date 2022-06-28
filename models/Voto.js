var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const VotSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  candidato: { type: String, required: true, max: 100 },
  pais: { type: String, required: true, max: 100 },
  lugarvotacion: { type: String, required: true, max: 100 },
  departamento: { type: String, max: 100 },
  fechaHora: { type: Date, default: Date.now },
});

module.exports = mongoose.model("votos", VotSchema);
