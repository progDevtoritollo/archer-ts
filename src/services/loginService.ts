import axios from 'axios';


class LoginService {
  API_ENDPOINT = 'http://localhost:5000/signin'

  async Login(loginData: object) {
    axios.defaults.headers.common['accept'] = 'application/json'
    axios.defaults.headers.common['Content-Type'] = 'application/json'

    let response
    response = await axios.post(`${this.API_ENDPOINT}`, loginData)
    return response.data
  }
}
const loginService = new LoginService()

export default loginService
