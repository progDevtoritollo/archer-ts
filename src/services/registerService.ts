import axios from 'axios';

import {API} from "./../commons"
import requestBuilder from "./../utils/requestBuilder"

class RegisterService {
  API_ENDPOINT = API + "/auth/signup";

  async Register(registerData: object) {
    return await requestBuilder.MakePostRequest(this.API_ENDPOINT, registerData)
  }
}
const registerService = new RegisterService()

export default registerService
