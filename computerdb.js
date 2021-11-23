//const { countBy } = require("cypress/types/lodash")

describe("Computer database",function(){


it("Click on Add Computer",function(){

cy.visit("https://computer-database.herokuapp.com/computers")

cy.createData('Chethana')

/**********************************************************/
/*cy.get('a#add').click()
var name = "Cancel"
cy.get('input#name').type(name)
cy.get('input#introduced').type("2021-11-22")
cy.get('input#discontinued').type("2022-11-22")
cy.get('select#company').select('Thinking Machines').should('have.value','2')
cy.get('input[type="submit"]').click()
cy.get('input#searchbox').type(name)
cy.get('input#searchsubmit').click()
//cy.get("td")
cy.get("tbody > tr > :nth-child(1)").eq(0).contains("a",name).click()
cy.wait(2000)
cy.get('a[href="/computers"]').click() */

// unwanted//
/*cy.get("td:nth-child(1)").each(($e1, index, $list) => {
  // cy.get("tr td:nth-child(2)").each(($e1, index, $list) => {  this can also be used because "td" or "tr td" gives the same output
  //storing the content in the text variable
  const text = $e1.text();
  //If the content is Google,iteration stops
  if (text.includes("hello99")) {
    
    //gets the CSS of the second column
    cy.get("td:nth-child(1)")
      //grabs the content in the index value
      .eq(index)
      // promises should be resolved manually since text() is jQuery method
      .then(function (Field) {
        const Fieldtext = Field.text();
        //console.log(Fieldtext)
        //debugger;
        //comparing strings using the jQuery method expect()
        expect(Fieldtext).to.equal("hello99")
       
        //cy.get('td:first').dblclick()
        
        //cy.focused().click()

       //cy.get('tbody > tr > :nth-child(1)').click()
       //cy.get('tbody>tr').eq(0).click()
      });
     
     }
    });
      */
// console.log(cy.get("tr td"))
// console.log('test123')
// debugger;

// var name =cy.get('.headerSortUp')
// console.log(name)
// debugger;y
//for(let i=0 ;i<countBy)
// cy.get(".zebra-striped a").each($a => {
//     const message = $a.text();
//     expect($a, message).to.have.attr("href")
//   })
//   var name = "Dell tests"//cy.get('input#name').type("Dell test")
//   cy.get('table.zebra-striped > tbody > tr > td > a').contains('Dell test').click()
  //tbody > :nth-child(2) > :nth-child(1)

  })
// var row = $(this).closest('table').find('tbody tr:first a').attr('href');





})