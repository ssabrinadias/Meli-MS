const express = require("express");
const router = express.Router();
const catalog = require("../services/catalog");
const item = require("../services/item");
const description = require("../services/description");

router.get("/items", catalog)
router.get("/items/:id", item)
router.get("/items/:id/description", description)


module.exports = router;