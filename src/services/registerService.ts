import axios from 'axios';

import {API} from "./../commons"
import requestBuilder from "./../utils/requestBuilder"

class RegisterService {
  API_ENDPOINT = API + "/auth/signup";

  async Register(registerData: object) {
    requestBuilder.makeSetDefaults()

    await axios.post(`${this.API_ENDPOINT}`, registerData).then((res)=>{return res}).catch((error)=>{
      console.error(error)
    })
  }
}
const registerService = new RegisterService()

export default registerService
