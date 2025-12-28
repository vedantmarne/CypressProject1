
describe('File Upload Test', function() {
it('File Upload Test', function(){
        cy.visit('https://trytestingthis.netlify.app/')
        cy.get('[name="myfile"]').click().attachFile('example.json')

  })

})