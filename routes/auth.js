var express = require("express");
var router = express.Router();

router.post('/login', (req, res, next) => {
    console.log('login', req.body);

    res.status(200).json("sucess");

});
module.exports = router;
