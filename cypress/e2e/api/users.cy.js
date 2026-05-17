import { faker } from '@faker-js/faker'
import UserFactory from '../../support/factories/UserFactory'
import UserService from '../../support/services/UsersService'

describe('Users API', () => {
    it('Should create final user successfully', () => {
        const user = UserFactory.createFinalUser()
        UserService
            .create(user)
            .then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.message)
                    .to.eq('Cadastro realizado com sucesso')
                expect(response.body._id)
                    .to.not.be.empty
            })
    })

    it('Should create admin user successfully', () => {
        const user = UserFactory.createAdminUser()
        UserService
            .create(user)
            .then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.message)
                    .to.eq('Cadastro realizado com sucesso')
                expect(response.body._id)
                    .to.not.be.empty
            })
    })

    it('Should not create user with existing email', () => {
        const user = UserFactory.createAdminUser()
        UserService
            .create(user)
            .then(() => {
                UserService
                    .create(user)
                    .then((response) => {
                        expect(response.status).to.eq(400)
                        expect(response.body.message)
                            .to.eq('Este email já está sendo usado')
                    })
            })
    })

    it('Should not create user with blank required field', () => {
        const user = UserFactory.createAdminUser()
        user.nome = ''
        UserService
            .create(user)
            .then((response) => {
                expect(response.status).to.eq(400)
            })
    })

    it('Should get user by id successfully', () => {
        const user = UserFactory.createAdminUser()
        UserService
            .create(user)
            .then((createResponse) => {
                const userId = createResponse.body._id
                UserService
                    .getById(userId)
                    .then((response) => {
                        expect(response.status).to.eq(200)
                        expect(response.body.nome)
                            .to.eq(user.nome)
                    })
            })
    })

    it('Should delete user successfully', () => {
        const user = UserFactory.createAdminUser()
        UserService
            .create(user)
            .then((createResponse) => {
                const userId = createResponse.body._id
                UserService
                    .delete(userId)
                    .then((response) => {
                        expect(response.status).to.eq(200)
                        expect(response.body.message)
                            .to.eq('Registro excluído com sucesso')
                    })
            })
    })

    it('Should update user successfully', () => {
        const user = UserFactory.createAdminUser()
        UserService
            .create(user)
            .then((createResponse) => {
                const userId = createResponse.body._id
                const updatedUser = UserFactory.createAdminUser()
                UserService
                    .update(userId, updatedUser)
                    .then((response) => {
                        expect(response.status).to.eq(200)
                        expect(response.body.message)
                            .to.eq('Registro alterado com sucesso')
                    })
            })
    })
})

