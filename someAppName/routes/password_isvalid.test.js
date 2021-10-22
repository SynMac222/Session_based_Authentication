var password_isvalid= require('./password_isvalid');

describe("testing password_isvalid functionality",()=>{
    // normal  usage
    test('testing the correct input',()=>{
    //Arange and Act for upper and lower range
    var isvalid=password_isvalid.password_isvalid('Syn999999');

    //Assert
    expect(isvalid).toBeTruthy();
     
    })

    //erroneous usage
    test('testing the wrong input',()=>{
    //Arange and Act for upper and lower range
    var isvalid=password_isvalid.password_isvalid(101);

    //Assert
    expect(isvalid).toBeFalsy();
    
    }) 


})