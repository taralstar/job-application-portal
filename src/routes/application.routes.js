const express = require("express");
const auth = require("../middleware/auth");
const upload = require("../middleware/upload");
const Application = require("../models/Application");

const router = express.Router();

// APPLY FOR JOB
router.post("/:jobId", auth, upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Resume file required" });
    }

    const application = await Application.create({
      applier: req.user,          // ✅ Jobuser ID
      job: req.params.jobId,      // ✅ Jober ID
      resume: req.file.path
    });

    res.status(201).json(application);
  } catch (err) {
    console.error("APPLICATION ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});

// GET MY APPLICATIONS
router.get("/", auth, async (req, res) => {
  try {
    const apps = await Application
      .find({ applier: req.user })
      .populate("job");

    res.json(apps);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET MY APPLICATIONS
router.get("/my", auth, async (req, res) => {
  try {
    const apps = await Application.find({ user: req.user })
      .populate("job");

    res.json(apps);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
