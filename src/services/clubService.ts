
import {API} from "../commons"

import requestBuilder from "./../utils/requestBuilder"
class ClubService {
  API_GET_CLUB_CHECKS = API + '/clubs/checks/all'
  API_GET_CHECK = API + '/checks/'
  API_GET_MEMBERS = API + '/clubs/members'
  API_CREATE_CLUB = API + '/clubs/create'
  API_GET_CLUBS = API + '/clubs/all'
  API_CLUB_JOIN = API + '/clubs/join'
  API_GET_CLUB_NEW_COMERS = API + "/clubs/get-newcomers";
  API_POST_CLUB_NEW_COMERS_ADD= API+ "/clubs/approve-newcomer"


  async getClubChecks(){
    return await requestBuilder.MakeGetRequest(this.API_GET_CLUB_CHECKS)
  }
  
  async getClubCheck(checkId:number){
    return await requestBuilder.MakeGetRequest(this.API_GET_CHECK+
    checkId)
  }
  async createClubs(data:object){
    return await requestBuilder.MakePostRequest(this.API_CREATE_CLUB, data)
  }

  async getClubMembers(){
    return await requestBuilder.MakeGetRequest(this.API_GET_MEMBERS)
  }
  async getAllClubs(){
    return await requestBuilder.MakeGetRequest(this.API_GET_CLUBS)
  }

  async postClubJoin(data:object){
    return await requestBuilder.MakePostRequest(this.API_CLUB_JOIN, data)
  }
  async getNewComers(){
    return await requestBuilder.MakeGetRequest(this.API_GET_CLUB_NEW_COMERS)
  }
  async postNewComerAdd(data:object){
    return await requestBuilder.MakePostRequest(this.API_POST_CLUB_NEW_COMERS_ADD, data)
  }
}
const clubService = new ClubService() 

export default clubService 
