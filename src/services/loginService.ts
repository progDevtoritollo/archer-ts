import axios from 'axios';
import {API} from "./../commons"

class LoginService {
  API_ENDPOINT = API +'/auth/login'

  async Login(loginData: object) {
    axios.defaults.headers.common['accept'] = 'application/json'
    axios.defaults.headers.common['Content-Type'] = 'application/json'

    let response
    response = await axios.post(`${this.API_ENDPOINT}`, loginData)
    return response
  }
}
const loginService = new LoginService()

export default loginService
