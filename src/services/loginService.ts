import axios from 'axios';


import {API} from "./../commons"
import requestBuilder from "./../utils/requestBuilder"
class LoginService {
  API_ENDPOINT = API +'/auth/login'

  async Login(loginData: object) {
    requestBuilder.makeSetDefaults()
    let res = await axios.post(`${this.API_ENDPOINT}`, loginData)
  return res
  }
}
const loginService = new LoginService()

export default loginService
