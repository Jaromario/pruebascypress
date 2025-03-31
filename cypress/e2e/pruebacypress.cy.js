describe('prueba de login', () => {
  it('login correcto para con usuario valido', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').should('contain', 'You logged into a secure area!')
  })

  it('login incorrecto con usuario invalido', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("tomsmith1")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').should('contain', 'Your username is invalid!')
  })

  it('login incorrecto con contraseña invalida', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPassword1!")
    cy.get('.fa').click()
    cy.get('#flash').should('contain', 'Your password is invalid!')
  })

})