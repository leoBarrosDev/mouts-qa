import { faker } from '@faker-js/faker'
import ProductFactory from '../../support/factories/ProductFactory'
import ProductService from '../../support/services/ProductService'

describe('Products API', () => {

    it('Should create product successfully', () => {
        const product = ProductFactory.createProduct()
        cy.createAdminUser()
            .then(({ user }) => {
                cy.loginApi(
                    user.email,
                    user.password
                ).then((token) => {
                    ProductService
                        .create(product, token)
                        .then((response) => {
                            expect(response.status)
                                .to.eq(201)
                            expect(response.body.message)
                                .to.eq('Cadastro realizado com sucesso')
                        })
                })
            })
    })

    it('Should list products successfully', () => {
        cy.createAdminUser()
            .then(({ user }) => {
                cy.loginApi(
                    user.email,
                    user.password
                ).then((token) => {
                    ProductService
                        .list(token)
                        .then((response) => {
                            expect(response.status)
                                .to.eq(200)
                            expect(response.body.produtos)
                                .to.be.an('array')
                        })
                })
            })
    })

    it('Should not allow creating a product that already exists', () => {
        const product = ProductFactory.createProduct()
        cy.createAdminUser()
            .then(({ user }) => {
                cy.loginApi(
                    user.email,
                    user.password
                ).then((token) => {
                    ProductService.create(product, token)
                        .then((response) => {
                            expect(response.status).to.eq(201)
                            ProductService.create(product, token)
                                .then((resp) => {
                                    expect(resp.status).to.eq(400)
                                    expect(resp.body.message).to.eq('Já existe produto com esse nome')
                                })
                        })
                })
            })
    })
    it('Should not allow creating a product with invalid token', () => {
        const product = ProductFactory.createProduct()
        const invalidToken = 'invalid.token.value'

        ProductService.create(product, invalidToken)
            .then((response) => {
                expect(response.status).to.eq(401)
                expect(response.body.message)
                    .to.eq('Token de acesso ausente, inválido, expirado ou usuário do token não existe mais')
            })
    })

    it('Should not allow creating a product when user is not admin', () => {
        const product = ProductFactory.createProduct()

        cy.createFinalUser()
            .then(({ user }) => {
                cy.loginApi(
                    user.email,
                    user.password
                ).then((token) => {
                    ProductService.create(product, token)
                        .then((response) => {
                            expect(response.status).to.eq(403)
                            expect(response.body.message).to.eq('Rota exclusiva para administradores')
                        })
                })
            })
    })
})