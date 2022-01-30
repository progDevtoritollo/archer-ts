import axios from 'axios';


class CheckService {
  API_ENDPOINT = 'http://localhost:5000/check/create'

  async Post(Data: object) {
    axios.defaults.headers.common['accept'] = 'application/json'
    axios.defaults.headers.common['Content-Type'] = 'application/json'

    let response
    response = await axios.post(`${this.API_ENDPOINT}`, Data)
    return response.data
  }
}
const checkService = new CheckService() 

export default checkService 
