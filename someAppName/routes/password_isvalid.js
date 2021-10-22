var passwordValidator = require('password-validator');

function password_isvalid(password){

    var schema = new passwordValidator();
    var isValid;


    schema.is().min(8)                                    // Minimum length 8
    .is().max(1000)                                 // Maximum length 1000
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have lowercase letters
    .has().digits()                                 // Must have digits
    .has().not().spaces()                           // Should not have spaces
    .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values


    //Validate password is complying to properties set
    isValid = schema.validate(password);
    console.log(isValid);

    return isValid;
}

module.exports = {password_isvalid};