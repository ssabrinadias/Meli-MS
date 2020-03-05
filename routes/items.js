const express = require("express");
const router = express.Router();

router.get("/items", (req, res, next) => (res.send(req.query)))
router.get("/items/:id", (req, res, next) => (res.send(req.params.id)))


module.exports = router;