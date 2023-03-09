var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/add', function(req, res) {
  fs.readFile("users.txt", function(err, data){
    if (err){
      console.log(err);

      res.json({mesage: "404 - Something went wrong"});
    }

    let users = data;
    console.log("users", users);

    let newUser = req.body;

    users += ", " + newUser.email;
    
    fs.writeFile("users.txt", users, function(err) {
      if (err) {
          console.log(err);
      }
    });

    res.json(users);
    return;
  })
})

module.exports = router;
