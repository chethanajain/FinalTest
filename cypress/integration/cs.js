describe("Computer database",()=>{


    it("Click on Add Computer",()=>{
    
    cy.visit("https://computer-database.herokuapp.com/computers")
    cy.get('a#add').click()
   var name = "ASCI"
cy.get('input#name').type(name)
cy.get('input#introduced').type("2021-11-22")
cy.get('input#discontinued').type("2022-11-22")
cy.get('select#company').select('Thinking Machines').should('have.value','2')
cy.get('input[type="submit"]').click()
cy.wait(5000)
cy.get('input#searchbox').type(name)
cy.wait(5000)
cy.get('input#searchsubmit').click()
cy.wait(10000)
//cy.get("td")
cy.get("tbody > tr > :nth-child(1)").eq(0).contains("a",name).click()
cy.wait(10000)
cy.get('a[href="/computers"]').click() 



  })


})

    /** @todo- to improve this code later */
