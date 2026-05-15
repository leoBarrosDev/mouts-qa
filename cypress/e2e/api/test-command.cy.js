describe('Validando Commands', () => {

  it('Deve criar usuário com sucesso', () => {

    cy.createUser()
      .then(({ user, response }) => {

        expect(response.status).to.eq(201)

        expect(response.body.message)
          .to.eq('Cadastro realizado com sucesso')

        expect(user.email)
          .to.not.be.empty
      })
  })

  it('Deve realizar login via API', () => {

    cy.createUser()
      .then(({ user }) => {

        cy.loginApi(
          user.email,
          user.password
        ).then((token) => {

          expect(token)
            .to.not.be.empty
        })
      })
  })

  it('Deve interceptar frontend login request', () => {

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
    })
})
})