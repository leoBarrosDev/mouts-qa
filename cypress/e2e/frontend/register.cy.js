import UserFactory from '../../support/factories/UserFactory'
import RegisterPage from '../../support/pages/RegisterPage'
import HomePage from '../../support/pages/HomePage'

describe('Cadastro Frontend', () => {

    it('Should register admin user successfully', () => {
        const user = UserFactory.createUser()

        RegisterPage.register(user)
        RegisterPage.validateMessageSuccess()
        HomePage.validateLoginSuccess()
    })

    it('Should register final user successfully', () => {
        const user = UserFactory.createFinalUser()

        RegisterPage.register(user)
        RegisterPage.validateMessageSuccess()
        HomePage.validateLoginSuccess()
    })

    it('Should register with name field empty', () => {
        const errorNameMessage = 'Nome é obrigatório'
        RegisterPage.visit()
        RegisterPage.fillEmail('test@example.com')
        RegisterPage.fillPassword('123456')
        RegisterPage.submit()
        RegisterPage.validateEmptyFieldError(errorNameMessage)
    })

    it('Should register with email field empty', () => {
        const errorEmailMessage = 'Email é obrigatório'
        RegisterPage.visit()
        RegisterPage.fillName('Test User')
        RegisterPage.fillPassword('123456')
        RegisterPage.submit()
        RegisterPage.validateEmptyFieldError(errorEmailMessage)
    })

    it('Should register with password field empty', () => {
        const errorPasswordMessage = 'Password é obrigatório'
        RegisterPage.visit()
        RegisterPage.fillName('Test User')
        RegisterPage.fillEmail('test@example.com')
        RegisterPage.submit()
        RegisterPage.validateEmptyFieldError(errorPasswordMessage)
    })
})
