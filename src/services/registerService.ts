import axios from 'axios';


class RegisterService {
  API_ENDPOINT = 'http://localhost:5000/signup'

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
