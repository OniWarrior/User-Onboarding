describe('Form App',()=>{

    const nameInput = () => cy.get('.inputs > :nth-child(2) > input')
    const emailInput = () => cy.get(':nth-child(3) > input')
    const passwordInput = () => cy.get(':nth-child(4) > input')
    const checkBoxInput = () => cy.get('.checkboxes > label > input')
    const testName = 'John'
    const testEmail = 'john@john.com'
    const testPassword= '123456789456'
    const testCheckBox = 'on'
    const submitButton = () => cy.get('button')

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    describe('Filling out input', () => {
        it('can type in the inputs', () => {
            nameInput()
            .should('have.value', '')   // ensures that this is empty prior to inputting values
            .type(testName)         
            .should('have.value', testName)
           
            emailInput()
            .should('have.value', '')  // ensures that this is empty prior to inputting values
            .type(testEmail)          
            .should('have.value', testEmail)

            passwordInput()
            .should('have.value', '')  // ensures that this is empty prior to inputting values
            .type(testPassword)          
            .should('have.value',testPassword)

            checkBoxInput()
            .should('have.value', 'off')            // ensures that this is unchecked prior to inputting value
            .type(testCheckBox)
            .should('have.value',testCheckBox)      
          
          })
    })

    describe('Submitting user', () => {
        it('can type in the inputs and submit', () => {
            nameInput().type(testName)
            emailInput().type(testEmail)
            passwordInput().type(testPassword)           
    
           submitButton().click()
    
           const newUser = () => cy.contains(testName)
    
           newUser().should('exist')
    
           //cleanup
           newUser().next().next().click()
        })
      })



})