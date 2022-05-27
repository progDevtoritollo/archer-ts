import axios from 'axios';
import {API} from "./../commons"

class CheckService {
  API_ENDPOINT = API + '/check/create'

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
