const express = require("express");
const router = express.Router();
const catalog = require("../services/catalog");
const product = require("../services/Product");
const description = require("../services/Description");

router.get("/items", catalog)
router.get("/items/:id", product)
router.get("/items/:id/description", description)


module.exports = router;