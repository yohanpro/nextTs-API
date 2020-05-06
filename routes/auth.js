var express = require("express");
var router = express.Router();

router.post('/login', (req, res, next) => {
    console.log('login');
    res.json("You logined Successfully!");
});
module.exports = router;
