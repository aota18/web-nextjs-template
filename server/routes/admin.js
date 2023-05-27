const express = require("express");
const router = express.Router();
const admin = require("../services/admin");

// Admin page route
router.get("/", async function (req, res, next) {
  try {
    res.json(await admin.getMultiple(req.query.page));
  } catch (err) {
    console.error("Error while getting img", err.message);
    next(err);
  }
});

// Create image
router.post("/", async function (req, res, next) {
  try {
    res.json(await admin.create(req.body));
  } catch (err) {
    console.error(`Error while creating img data`, err.message);
    next(err);
  }
});

// Remove image
router.delete("/", function (req, res, next) {
  res.send("Delete image");
});

module.exports = router;
