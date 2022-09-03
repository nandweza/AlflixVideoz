const mongoose = require("mongoose");

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const ListSchema = new mongoose.Schema(
  {
    title: { type: String, required:true, unique:true },
    type: { type: String },
    genre: { type: String },
    content: { type: Array },
    narration: { type: String },
  },
  { timestamps: true }
);

module.exports = 
    mongoose.models.List || mongoose.model("List", ListSchema);