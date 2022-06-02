import axios from 'axios';

import {API} from "./../commons"
import requestBuilder from "./../utils/requestBuilder"

class RegisterService {
  API_ENDPOINT = API + "/auth/signup";

  async Register(registerData: object) {
    requestBuilder.makeSetDefaults()

    let response
    response = await axios.post(`${this.API_ENDPOINT}`, registerData)
    return response.data
  }
}
const registerService = new RegisterService()

export default registerService
