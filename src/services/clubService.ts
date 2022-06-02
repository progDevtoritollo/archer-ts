import axios from 'axios';
import {API} from "../commons"

import requestBuilder from "./../utils/requestBuilder"
class ClubService {
  API_GET_CHECKS = API + '/club/checks/all'
  API_CREATE_CLUB = API + '/clubs/create'


  async getClubChecks(){
    requestBuilder.makeSetDefaults()
    let response
    response = await axios.get(`${this.API_GET_CHECKS}`)
    return response.data
  }
  async createClubs(){
    requestBuilder.makeSetDefaults()
    await axios.post(`${this.API_CREATE_CLUB}`).then((res)=>{return res}).catch((error)=>{
      console.error(error)
    })
    
  }

}
const clubService = new ClubService() 

export default clubService 
