/// <reference types="cypress"/>
before(function(){
    cy.fixture('example.json').as('test_data')
})

it('Read file using fixture', function() {
            cy.fixture('example.json').then((data)=>{
            cy.log(data.name)
            cy.log(data.email)
            
        })

        cy.log(this.test_data.name)
  })

  it('Read file using readFile()', function(){
        cy.readFile('./cypress/fixtures/example.json').then((data)=>{
            cy.log(data.name)
            cy.log(data.email)
            
        })
  })

    it('Write file demo()', function(){
        cy.writeFile('./cypress/fixtures/sample.txt','Hello I am Vedant\n')

        cy.writeFile('./cypress/fixtures/sample.txt','I am learning cypress',{flag:'a+'})
  })