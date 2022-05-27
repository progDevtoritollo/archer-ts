import axios from 'axios';
import {API} from "./../commons"

class RegisterService {
  API_ENDPOINT = API + "/auth/signup";

  async Register(registerData: object) {
    axios.defaults.headers.common['accept'] = 'application/json'
    axios.defaults.headers.common['Content-Type'] = 'application/json'

    let response
    response = await axios.post(`${this.API_ENDPOINT}`, registerData)
    return response.data
  }
}
const registerService = new RegisterService()

export default registerService
