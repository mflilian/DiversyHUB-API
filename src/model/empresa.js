const mongoose = require("mongoose");
const empresaSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("collectionEmpresa", empresaSchema);
