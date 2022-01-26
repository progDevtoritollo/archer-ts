import axios from 'axios';


class KRService {
  API_ENDPOINT = 'http://localhost:5000/kr'

  async Post(loginData: object) {
    axios.defaults.headers.common['accept'] = 'application/json'
    axios.defaults.headers.common['Content-Type'] = 'application/json'

    let response
    response = await axios.post(`${this.API_ENDPOINT}`, loginData)
    return response.data
  }
}
const krService = new KRService()

export default krService
