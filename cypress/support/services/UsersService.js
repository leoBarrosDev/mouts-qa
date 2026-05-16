import { API_URL } from '../constants/api'

class UserService {

  create(user) {
    return cy.request({
      method: 'POST',
      url: `${API_URL}/usuarios`,
      body: user,
      failOnStatusCode: false,
      retryOnNetworkFailure: true
    })
  }


  getById(userId) {
    return cy.request({
      method: 'GET',
      url: `${API_URL}/usuarios/${userId}`
    })
  }

  delete(userId) {
    return cy.request({
      method: 'DELETE',
      url: `${API_URL}/usuarios/${userId}`,
      failOnStatusCode: false
    })
  }

  update(userId, updatedData) {
    return cy.request({
      method: 'PUT',
      url: `${API_URL}/usuarios/${userId}`,
      body: updatedData,
      failOnStatusCode: false
    })
  }
}

export default new UserService()