import axios from 'axios';

import {API} from "../commons"
import requestBuilder from "./../utils/requestBuilder"

class UserService {
  // API_USER_BY_ID= API + '/user/'
  API_USER_IS_AUTH = API + '/hello'

  API_USER_PROFILE_UPDATE = API + '/user/me/update'
  API_USER_STATISTIC = API + '/checks/me/statistics-1'
  API_USER_CHECKS = API + '/checks/me'
  API_USER_CHECK_SAVE = API + '/checks/me/save'
  API_USER_INFO = API+ "/user/me"

  // async getUserProfile(userid: number) {
  //   return await requestBuilder.MakeGetRequest(this.API_USER_BY_ID+
  //     userid)
  // }
  async getIsAuth() {
    return await requestBuilder.MakeGetRequest(`${this.API_USER_IS_AUTH}`)
  }

  async postUserProfileUpdate(Data:object) {
    return await requestBuilder.MakePostRequest(this.API_USER_PROFILE_UPDATE,Data)
  }

  async getUserStatistic() {
    return await requestBuilder.MakeGetRequest(`${this.API_USER_STATISTIC}`)
  }

  async getUserChecks() {
    return await requestBuilder.MakeGetRequest(this.API_USER_CHECKS)
  }

  async postUserCheckCreate(Data:object) {
    return await requestBuilder.MakePostRequest(this.API_USER_CHECK_SAVE,Data)
  }

  async getUserInfo(){
    return await requestBuilder.MakeGetRequest(this.API_USER_INFO)
  }

}
const userService = new UserService() 

export default userService;
