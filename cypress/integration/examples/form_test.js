describe ("End to End Testing For Pizza Ordering", function(){

    const sauceInput=function(){return cy.get("input[name='pizzaSauce']") };

    it("ensuring sauce input has a value that is one of two available sauces", function(){
        sauceInput().should("exist");
        sauceInput().should("have.value");
    })

})