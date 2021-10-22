const LocalStrategy = require('passport-local').Strategy;
// var sqlite3 = require('sqlite3').verbose()
let dataStore = require('../users.json');
const bcrypt = require('bcryptjs');


module.exports = function(passport) {
console.log("Passport Function triggered");
//Passport pulls the the name variables from the name attribute in login form.  If different, you need to use whats on lines 10 and 11
passport.use(new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password'
}, async function(username, password, done) {

    try {
        
            
            console.log(username);
            // databaseOperations.authenticateUser(username, password, done);
            // seaerch user in json file to see if the user exist
            'use strict';

            // let rawdata = fs.readFileSync('users.json');
            dataStore=JSON.stringify(dataStore)
            let users = JSON.parse(dataStore);
            console.log(users);

            for (var index = 0; index < users.length; ++index) {

                var user = users[index];
            
            
                if(user.email == username ){  // && user.password == password
                //   res.render('confirmation', {first_name:user.first_name, last_name:user.last_name})
                    // done(null,user);
                    const hashedpwd= await bcrypt.hash(password,10);
                    console.log(hashedpwd);
                    bcrypt.compare(password, user.password, function(err, result) { // check the password
                        console.log(result);
                        if (result == true){
                            done(null,user);
                        }
                        else{
                            done(null,false);
                        }
                });
                }
                else{
                //   var error = "Incorrect email or password";
                //   res.render('error', {error: error} );
                    done(null,false);
                }
            }
    } catch (error) {

        // done(null,error);
    }
}));

passport.serializeUser(function(user, done) {
	done(null, user); 
});

passport.deserializeUser(function(user, done) {
	done(null, user); //you can access with req.user
});

}