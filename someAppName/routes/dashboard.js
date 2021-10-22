var express = require('express');
var router = express.Router();


router.get('/',function(req,res,next) {
    let userinfo = req.user;
    console.log(req.user);
    res.render('dashboard',{userinfo})
    
})

module.exports = router;