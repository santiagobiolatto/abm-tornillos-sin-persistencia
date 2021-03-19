const express = require("express");
const router = express.Router();
const tornillos = require("./tornillos.route");

router.use("/", tornillos);

module.exports = router;
