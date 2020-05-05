var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  const id = req.query;
  console.log("id", id);
  res.send("respond with a resource ", id);
});

module.exports = router;
