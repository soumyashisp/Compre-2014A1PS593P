var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', {title:"2014ABPS676P"});
});

router.post('/', function(req, res){
  if(req.body.username == 'admin' && req.body.password == '123'){
    res.send('Logged in');
  }
  else{
    res.send('Invalid Credentials');
  }
});


module.exports = router;
