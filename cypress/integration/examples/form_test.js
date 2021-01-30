describe ("End to End Testing For Pizza Ordering", function(){

    const sizeInput=function(){return cy.get("input[name='pizzaSize']")};
    const sauceInput=function(){return cy.get("input[name='pizzaSauce']") };
    const pepInput=function(){return cy.get("input[name='toppingsPep']")};
    const extraCheeseInput=function(){return cy.get("input[name='toppingsExtraCheese']")};
    const olivesInput=function(){return cy.get("input[name='toppingsOlives']")};
    const onionsInput=function(){return cy.get("input[name='toppingsOnions']")};
    const instructionsInput=function(){return cy.get("input[name='pizzaInstructions']")};
    const submitButton=function(){return cy.get("input[name='pizzaSize']")};


    it("ensuring size input has a value", function(){
        
        sizeInput().should("exist");
        sizeInput().should("have.value");
    })

    it("ensuring sauce input has a value", function(){

        sauceInput().should("exist");
        sauceInput().should("have.value");

    })
    it("ensuring pepperoni toppings input exists", function(){

        pepInput().should("exist");
    })
    it("ensuring extra cheese topping input exists", function(){

        extraCheeseInput().should("exist");
    })
    it("ensuring olives topping input exists", function(){

        olivesInput().should("exist");
    })
    it("ensuring onions topping input exists", function(){

        onionsInput().should("exist");
    })
    it("ensuring instructions input exists", function(){

        instructionsInput().should("exist");
    })

    it("ensuring submit button exists", function(){

        submitButton().should("exist");
    })

})