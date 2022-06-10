import axios from 'axios';
import {API} from "../commons"

import requestBuilder from "./../utils/requestBuilder"
class ClubService {
  API_GET_CLUB_CHECKS = API + '/clubs/checks/all'
  API_GET_CHECK = API + '/checks/'

  API_CREATE_CLUB = API + '/clubs/create'


  async getClubChecks(){
    return await requestBuilder.MakeGetRequest(this.API_GET_CLUB_CHECKS)
  }
  
  async getClubCheck(checkId:number){
    return await requestBuilder.MakeGetRequest(this.API_GET_CHECK+
    checkId)


  }
  async createClubs(){
    return await requestBuilder.MakePostRequest(this.API_CREATE_CLUB)
  }



}
const clubService = new ClubService() 

export default clubService 
