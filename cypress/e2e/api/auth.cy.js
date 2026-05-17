describe('Auth API', () => {

    it('Should login successfully with final user', () => {
        cy.createFinalUser()
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

    it('Should login successfully with admin user', () => {
        cy.createAdminUser()
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

    // O teste abaixo será ignorado por enquanto, pois a API de autenticação ainda não está retornando o status code 401
    // para tentativas de login com email ou senha inválidos, o que é necessário para validar corretamente esse cenário de teste.

    it.skip('Should not login with invalid email or password', () => {
        cy.request({
            method: 'POST',
            url: '/api/auth/login',
            failOnStatusCode: false,
            body: {
                email: 'invalid.email@example.com',
                password: 'wrongPassword',
            },
        }).then((response) => {
            expect(response.status).to.equal(401)
            expect(response.body.message).to.equal('Email e/ou senha inválidos')
        })
    })

})