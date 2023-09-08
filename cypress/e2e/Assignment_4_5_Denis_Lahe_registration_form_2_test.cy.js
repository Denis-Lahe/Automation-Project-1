beforeEach(() => {
    cy.visit('cypress/fixtures/registration_form_2.html')
})

/*
Assignement 4: add content to the following tests
*/

describe('Section 1: Functional tests', () => {

    it('User can use only same both first and validation passwords', ()=>{
        // Add test steps for filling in only mandatory fields
        // Type confirmation password which is different from first password
        // Assert that submit button is not enabled
        // Assert that submit button is not enabled
        // Assert that successful message is not visible
        // Assert that successful message is not visible
        // Assert that error message is visible
        //Clear not matching confirmation password, and fill it with same value as the #password, Assert that the error message is not visible anymore and the submit button is enabled
        cy.get('#username').type('Zodiac13') 
        cy.get('#email').type('zodiac@politsei.ee')
        cy.get('[placeholder="John"]').type('Zodiac')
        cy.get('#lastName').type('Zodiacovich')
        cy.get('[data-testid="phoneNumberTestId"]').type('8675309')     
        cy.get('#password').type('zodik123')
        cy.get('#confirm').type('zorro')
        cy.get('h2').contains('Password').click()       
        cy.get('.submit_button').should('be.disabled')    
        cy.get('#success_message').should('not.be.visible')        
        cy.get('#password_error_message').should('be.visible')      
        cy.get('#confirm').clear()
        cy.get('#confirm').type('zodik123')
        cy.get('h2').contains('Password').click()
        cy.get('#password_error_message').should('not.be.visible')
        cy.get('.submit_button').should('be.enabled')


    })
    
    it('User can submit form with all fields added', ()=>{
        // Add test steps for filling in ALL fields
        // Assert that submit button is enabled
        // Assert that after submitting the form system show successful message
        cy.get('#username').type('Zodiac13')
        cy.get('#email').type('zodiac@politsei.ee')
        cy.get('[placeholder="John"]').type('Zodiac')
        cy.get('#lastName').type('Zodiacovich')
        cy.get('[data-testid="phoneNumberTestId"]').type('8675309') 
        cy.get('#javascriptFavLanguage').click()
        cy.get('input[name="vehicle1"]').click()
        cy.get('input[name="vehicle2"]').click()
        cy.get('input[name="vehicle3"]').click()
        cy.get('#cars').select ("Volvo")
        cy.get('#animal').select ("hippo")
        cy.get('#password').type('zodik123')
        cy.get('#confirm').type('zodik123')
        cy.get('h2').contains('Password').click()
        cy.get('.submit_button').should('be.enabled')
        cy.get('.submit_button').click()
        cy.get('#success_message').should('be.visible')
        
    })

    it('User can submit form with valid data and only mandatory fields added', () => {
     // Add test steps for filling in ONLY mandatory fields
     // Assert that submit button is enabled
     // Assert that after submitting the form system shows successful message
     // example, how to use function 
        inputValidData('Zodiac13')
        cy.get('h2').contains('Password').click()
        cy.get('.submit_button').should('be.enabled')
        cy.get('.submit_button').click()
        cy.get('#success_message').should('be.visible')
        
        
    })

    // Add at least 1 test for checking some mandatory field's absence 

        it('User cant submit form with mandatory e-mail field not filled ', () => {
        inputValidData('Zodiac13')
        cy.get('#email').clear()
        cy.get('h2').contains('Password').click()
        cy.get('.submit_button').should('not.be.enabled')
        cy.get('#input_error_message').should('be.visible')         
        
    })
        it('User cant submit form with mandatory First name field not filled ', () => {
        inputValidData('Zodiac13')
        cy.get('[data-cy="name"]').clear()
        cy.get('h2').contains('Password').click()
        cy.get('.submit_button').should('not.be.enabled')
        cy.get('#input_error_message').should('be.visible')      
      
    })
    
})

/*
Assignement 5: create more visual tests
*/

describe('Section 2: Visual tests', () => {
    it('Check that logo is correct and has correct size', () => {
        cy.log('Will check logo source and size')
        cy.get('img').should('have.attr', 'src').should('include', 'cerebrum_hub_logo')
        cy.get('img').invoke('height').should('be.lessThan', 178)
            .and('be.greaterThan', 100)   
    })

    it('My test for second picture Cypress logo', () => {
        cy.log('Will check logo source and size')
        cy.get('[data-cy="cypress_logo"]').should('have.attr', 'src').should('include', 'cypress_logo')
        cy.get('[data-cy="cypress_logo"]').invoke('height').should('be.lessThan', 116).and('be.greaterThan', 80)  
                      
    });

    it('Check navigation part 1 (Registration form 1)', () => {
        cy.get('nav').children().should('have.length', 2)
        cy.get('nav').siblings('h1').should('have.text', 'Registration form number 2')
        cy.get('nav').children().eq(0).should('be.visible')
            .and('have.attr', 'href', 'registration_form_1.html')
            .click()
        cy.url().should('contain', '/registration_form_1.html')
        cy.go('back')
        cy.log('Back again in registration form 2')
    })

    // Create similar test for checking the second link 
    it('Check navigation part 1 (Registration form 3)', () => {
        cy.get('nav').children().should('have.length', 2)
        cy.get('nav').siblings('h1').should('have.text', 'Registration form number 2')
        cy.get('nav').children().eq(1).should('be.visible')
            .and('have.attr', 'href', 'registration_form_3.html')
            .click()
        cy.url().should('contain', '/registration_form_3.html')
        cy.go('back')
        cy.log('Back again in registration form 2')
    })




    it('Check that radio button list is correct', () => {        
        cy.get('input[type="radio"]').should('have.length', 4)        
        cy.get('input[type="radio"]').next().eq(0).should('have.text','HTML')
        cy.get('input[type="radio"]').next().eq(1).should('have.text','CSS')
        cy.get('input[type="radio"]').next().eq(2).should('have.text','JavaScript')
        cy.get('input[type="radio"]').next().eq(3).should('have.text','PHP')

        cy.get('input[type="radio"]').eq(0).should('not.be.checked')
        cy.get('input[type="radio"]').eq(1).should('not.be.checked')
        cy.get('input[type="radio"]').eq(2).should('not.be.checked')
        cy.get('input[type="radio"]').eq(3).should('not.be.checked')  

        cy.get('input[type="radio"]').eq(0).check().should('be.checked')
        cy.get('input[type="radio"]').eq(1).check().should('be.checked')
        cy.get('input[type="radio"]').eq(0).should('not.be.checked')
    })

    // Create test similar to previous one verifying check boxes
    it('Check that check boxes list is correct', () => {       
        cy.get('input[class="checkbox vehicles"]').should('have.length', 3)
        cy.get('input[class="checkbox vehicles"]').next().eq(0).should('have.text','I have a bike')
        cy.get('input[class="checkbox vehicles"]').next().eq(1).should('have.text','I have a car')
        cy.get('input[class="checkbox vehicles"]').next().eq(2).should('have.text','I have a boat')        
        
        cy.get('input[class="checkbox vehicles"]').eq(0).should('not.be.checked')
        cy.get('input[class="checkbox vehicles"]').eq(1).should('not.be.checked')
        cy.get('input[class="checkbox vehicles"]').eq(2).should('not.be.checked')        
        
        cy.get('input[class="checkbox vehicles"]').eq(0).click()
        cy.get('h2').contains('Your favourite transport').click()
        cy.get('input[class="checkbox vehicles"]').eq(0).should('be.checked')

        cy.get('input[class="checkbox vehicles"]').eq(1).click()
        cy.get('h2').contains('Your favourite transport').click()

        cy.get('input[class="checkbox vehicles"]').eq(0).should('be.checked')
        cy.get('input[class="checkbox vehicles"]').eq(1).should('be.checked')          
       
    })

    it('Car dropdown is correct', () => {        
        cy.get('#cars').select(1).screenshot('Cars drop-down')
        cy.screenshot('Full page screenshot')
        cy.get('#cars').children().should('have.length', 4)
        cy.get('#cars').find('option').should('have.length', 4)
        cy.get('#cars').find('option').eq(0).should('have.text', 'Volvo')
        cy.get('#cars').find('option').then(options => {
            const actual = [...options].map(option => option.value)
            expect(actual).to.deep.eq(['volvo', 'saab', 'opel', 'audi'])
        })
    })


    // Create test similar to previous one
    it('Animals dropdown is correct', () => {
        cy.get('#animal').find('option').should('have.length', 6)
        cy.get('#animal').find('option').then(options => {
            const actual = [...options].map(option => option.value)
            expect(actual).to.deep.eq(['dog', 'cat', 'snake', 'hippo', 'cow', 'mouse'])
        })


    })
        

})

function inputValidData(username) {
    cy.log('Username will be filled')
    cy.get('input[data-testid="user"]').type(username)
    cy.get('#email').type('zodiac@politsei.ee')
    cy.get('[data-cy="name"]').type('Zodiac')
    cy.get('#lastName').type('Zodiacovich')
    cy.get('[data-testid="phoneNumberTestId"]').type('8675309')
    cy.get('#cars').select ("Volvo")
    cy.get('#animal').select ("hippo")
    // If element has multiple classes, then one of them can be used
    cy.get('#password').type('zodik123')
    cy.get('#confirm').type('zodik123')
    cy.get('h2').contains('Password').click()
}