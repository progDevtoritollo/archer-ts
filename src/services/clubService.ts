import axios from 'axios';
import {API} from "../commons"

import requestBuilder from "./../utils/requestBuilder"
class ClubService {
  API_GET_CHECKS = API + '/club/checks/all'
  API_GET_CHECK = API + '/checks/'

  API_CREATE_CLUB = API + '/clubs/create'


  async getClubChecks(){
    requestBuilder.makeSetDefaults()
    await axios.get(`${this.API_GET_CHECKS}`).then((res)=>{return res}).catch((error)=>{
      console.error(error)
    })
  }
  async getClubCheck(checkId:number){
    requestBuilder.makeSetDefaults()
    await axios.get(`${this.API_GET_CHECKS}+
    ${checkId}`).then((res)=>{return res}).catch((error)=>{
      console.error(error)
    })
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
