const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    applier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Jobuser",   // ✅ CORRECT USER MODEL
      required: true
    },
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Jober",     // ✅ CORRECT JOB MODEL
      required: true
    },
    resume: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

// ❌ NO unique indexes
module.exports = mongoose.model("Application", applicationSchema);
