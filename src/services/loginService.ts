import axios from 'axios';

import {API} from "./../commons"
import requestBuilder from "./../utils/requestBuilder"

class LoginService {
  API_ENDPOINT = API +'/auth/login'

  async Login(loginData: object) {
    requestBuilder.makeSetDefaults()
    
    await axios.post(`${this.API_ENDPOINT}`, loginData).then((res)=>{return res}).catch((error)=>{
      console.error(error)
    })
  }
}
const loginService = new LoginService()

export default loginService
