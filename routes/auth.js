var express = require("express");
var router = express.Router();
const jwt = require("jwt-simple");

router.post("/login", (req, res, next) => {
  //지금이야 딱히 상관없음 예시일뿐
  let data = req.body;
  console.log("data", data);
  const user = {
    email: data.email,
    name: data.name,
  };
  console.log("user", user);

  res.status(200).json(user);
});
module.exports = router;
