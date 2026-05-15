import HomePage from '../../support/pages/HomePage'

describe('Login Frontend', () => {

  it('Deve realizar login com sucesso', () => {

    cy.createUser()
      .then(({ user }) => {

        cy.interceptLogin()

        cy.login(
          user.email,
          user.password
        )

        cy.wait('@loginRequest')
          .its('response.statusCode')
          .should('eq', 200)

        cy.url()
          .should('contain', '/home')

        HomePage.validateLoginSuccess()
      })
  })
})