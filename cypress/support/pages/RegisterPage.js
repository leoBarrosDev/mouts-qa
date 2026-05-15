class RegisterPage {

  elements = {

    nomeInput: () => cy.get('[data-testid="nome"]'),

    emailInput: () => cy.get('[data-testid="email"]'),

    passwordInput: () => cy.get('[data-testid="password"]'),

    cadastrarButton: () => cy.get('[data-testid="cadastrar"]')
  }

  visit() {

    cy.visit('/cadastrarusuarios')
  }

  fillName(nome) {

    this.elements
      .nomeInput()
      .should('be.visible')
      .type(nome)
  }

  fillEmail(email) {

    this.elements
      .emailInput()
      .should('be.visible')
      .type(email)
  }

  fillPassword(password) {

    this.elements
      .passwordInput()
      .should('be.visible')
      .type(password)
  }

  submit() {

    this.elements
      .cadastrarButton()
      .click()
  }

  register(user) {

    this.visit()

    this.fillName(user.nome)

    this.fillEmail(user.email)

    this.fillPassword(user.password)

    this.submit()
  }
}

export default new RegisterPage()