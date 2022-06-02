import axios from 'axios';

import {API} from "./../commons"
import requestBuilder from "./../utils/requestBuilder"

class LoginService {
  API_ENDPOINT = API +'/auth/login'

  async Login(loginData: object) {
    requestBuilder.makeSetDefaults()

    let response
    response = await axios.post(`${this.API_ENDPOINT}`, loginData)
    return response
  }
}
const loginService = new LoginService()

export default loginService
