import HomePage from '../../support/pages/HomePage'
import ShoppingCartPage from '../../support/pages/ShoppingCartPage'

describe('Shopping List Flow', () => {

  it('Should add products to shopping list successfully', () => {
    const productName = 'Logitech MX Vertical'
    cy.createFinalUser()
      .then(({ user }) => {
        cy.login(
          user.email,
          user.password
        )

        HomePage.validateLoginSuccess()
        HomePage.addProductToList(productName)
        HomePage.accessShoppingList()
        ShoppingCartPage.validateProductInList(productName)
      })
  })

  it('Should clear shopping list successfully', () => {
    const productName = 'Logitech MX Vertical'
    cy.createFinalUser()
      .then(({ user }) => {
        cy.login(
          user.email,
          user.password
        )
        HomePage.validateLoginSuccess()
        HomePage.addProductToList(productName)
        HomePage.accessShoppingList()
        ShoppingCartPage.validateProductInList(productName)
        ShoppingCartPage.clearShoppingList()
        ShoppingCartPage.validateEmptyList(productName)
      })
  })

  it('Full flow: create product via API, add from frontend and validate persistence via API', () => {
    const productName = 'Test Product API'
    let adminUser

    cy.createAdminUser()
      .then(({ user }) => {
        adminUser = user
        cy.createProductViaAPI(adminUser.email, adminUser.password, productName)
      })
      .then(() => {
        cy.login(adminUser.email, adminUser.password)
        HomePage.validateLoginSuccess()
        HomePage.accessProductList()
        HomePage.validateProductExists(productName)
        ShoppingCartPage.validateProductInList(productName)
      })
  })
})