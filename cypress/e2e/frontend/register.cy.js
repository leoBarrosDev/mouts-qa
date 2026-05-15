import HomePage from '../../support/pages/HomePage'
import UserFactory from '../../support/factories/UserFactory'
import RegisterPage from '../../support/pages/RegisterPage'

describe('Cadastro Frontend', () => {

    it('Deve cadastrar usuário com sucesso', () => {

        const user = UserFactory.createUser()

        RegisterPage.register(user)

        cy.url()
            .should('contain', '/home')

        HomePage.validateLoginSuccess()
    })
})