var express = require('express');
var router = express.Router();
var fs = require('fs');
const bcrypt = require('bcryptjs');
var password_isvalid= require('./password_isvalid');

// var sqlite3 = require('sqlite3').verbose();
// console.log(sqlite3);
// var db = new sqlite3.Database(':memory:',(err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Connected to the in-memory SQlite database.');
// });

// db.close((err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Close the database connection.');
// });

/* GET home page. */
router.post('/', async function(req, res, next) {
    
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    var email = req.body.email;
    var password = req.body.password;
  
    if(!password_isvalid.password_isvalid(password)){
        var error = "Password is not valid";
        res.render('error', {error:error});

    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    
    
    if (password.length < 8){
        var error = "Password not long enough";
        res.render('error', {error:error});
    }
    else{
        console.log("first_name: " + first_name + "last_name: " + last_name + " Email: " + email + " Password: " + hashedPassword);

        'use strict';
            var randomValue= Math.random() * 22;
        let users = [{ 
            id:randomValue,
            first_name: first_name,
            last_name: last_name, 
            email: email,
            password: hashedPassword,
        }];
        
        let data = JSON.stringify(users);
        fs.writeFileSync('users.json', data);
        
        res.render('confirmation', { first_name : first_name, last_name: last_name});


                // SQLite3 

        

        // db.serialize(function() {
        // db.run("CREATE TABLE lorem (info TEXT)");

        // var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
        // for (var i = 0; i < 10; i++) {
        //     stmt.run("Ipsum " + i);
        // }
        // stmt.finalize();

        // db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
        //     console.log(row.id + ": " + row.info);
        // });
        // });

        // db.close();
    }
});

module.exports = router;