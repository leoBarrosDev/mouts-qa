import { API_URL } from '../constants/api'

class AuthService {

  login(email, password) {

    return cy.request({

      method: 'POST',

      url: `${API_URL}/login`,

      body: {
        email,
        password
      },
      failOnStatusCode: false,
      retryOnNetworkFailure: true
    })
  }
}

export default new AuthService()