var numberFunctions= require('./favoriteNumber');


describe("testing favoriteNum input functionality",()=>{
    // normal  usage
    test('testing the input range',()=>{
    //Arange and Act for upper and lower range
    var avalue=numberFunctions.getFavoriteNum(44);

    //Assert
    expect(avalue).toBeGreaterThan(0);
     expect(avalue).toBeLessThanOrEqual(100);
    })

    //erroneous usage
    test('testing the input out of range',()=>{
    //Arange and Act for upper and lower range
    var avalue=numberFunctions.getFavoriteNum(101);

    //Assert
    expect(avalue).toBe(-1);
    
    }) 


})

