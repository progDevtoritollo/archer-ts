import axios from 'axios';
import {API} from "../commons"

import requestBuilder from "./../utils/requestBuilder"
class ClubService {
  API_GET_CHECKS = API + '/club/checks/all'


  async getClubChecks(){
    requestBuilder.makeSetDefaults()
    let response
    response = await axios.get(`${this.API_GET_CHECKS}`)
    return response.data
  }

}
const clubService = new ClubService() 

export default clubService 
