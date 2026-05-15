class HomePage {

    elements = {

        homeTitle: () => cy.get('h1'),

        logoutButton: () => cy.get('[data-testid="logout"]')
    }

    validateLoginSuccess() {

        this.elements
            .logoutButton()
            .should('be.visible')
    }
}

export default new HomePage()