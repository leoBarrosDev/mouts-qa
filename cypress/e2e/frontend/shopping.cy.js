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
      })
  })
})