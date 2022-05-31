import axios from 'axios';
import {API} from "../commons"

class ClubService {
  API_GET_CHECKS = API + '/club/checks/all'


  async getClubChecks(){
    
    axios.defaults.headers.common['accept'] = 'application/json'
    axios.defaults.headers.common['Content-Type'] = 'application/json'
    let response
    response = await axios.get(`${this.API_GET_CHECKS}`)
    return response.data
  }

}
const clubService = new ClubService() 

export default clubService 
