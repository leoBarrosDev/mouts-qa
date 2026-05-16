class HomePage {

    addProductToList(productName) {
        cy.contains('.card', productName)
            .within(() => {
                cy.get('[data-testid="adicionarNaLista"]')
                    .click()
            })
    }

    accessShoppingList() {
        cy.contains('a', 'Lista de Compras')
            .click()
    }

    validateLoginSuccess() {
        cy.url()
            .should('include', '/home')
    }

    validateWelcomeMessageWithUsername(username) {
        elements.messageWelcome()
            .should('be.visible')
            .and('contain', `Bem Vindo ${username}`)
    }

    validateWelcomeMessage() {
        elements.messageWelcome()
            .should('be.visible')
            .and('contain', 'Bem-vindo')
    }

    validateLoginError() {
        cy.contains('div', 'Email e/ou senha inválidos')
            .should('be.visible')
    }
}

export default new HomePage()