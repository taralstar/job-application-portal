const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    applier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Jobuser",   
      required: true
    },
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Jober",    
      required: true
    },
    resume: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);


module.exports = mongoose.model("Application", applicationSchema);
