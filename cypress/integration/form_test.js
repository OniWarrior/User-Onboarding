describe('Form App',()=>{

    const nameInput = () => cy.get('.inputs > :nth-child(2) > input')
    const emailInput = () => cy.get(':nth-child(3) > input')
    const passwordInput = () => cy.get(':nth-child(4) > input')
    

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    describe('Filling out input', () => {
        it('can type in the inputs and cancel', () => {
            nameInput()
            .should('have.value', '')
            .type(nameInput)
            .shoud('have.value', nameInput)
           
            emailInput()
            .should('have.value', '')
            .type(emailInput)
            .shoud('have.value', emailInput)

            passwordInput()
            .should('have.value', '')
            .type(passwordInput)
            .shoud('have.value',passwordInput)
      
          
          })
    })



})