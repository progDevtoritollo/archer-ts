import axios from 'axios';


import {API} from "./../commons"
import requestBuilder from "./../utils/requestBuilder"
class LoginService {
  API_ENDPOINT = API +'/auth/login'

  async Login(loginData: object) {
  return await requestBuilder.MakePostRequest(this.API_ENDPOINT, loginData)
  }
}
const loginService = new LoginService()

export default loginService
