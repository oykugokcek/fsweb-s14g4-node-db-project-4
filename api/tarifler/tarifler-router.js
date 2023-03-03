const express = require("express");
const router = express.Router();

const mw = require("../tarifler/tarifler-middleware");

router.get("/:id", mw.checkTarifId, (req, res, next) => {
  try {
    res.json(req.tarif);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
