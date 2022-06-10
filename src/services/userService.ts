import axios from 'axios';

import {API} from "../commons"
import requestBuilder from "./../utils/requestBuilder"

class UserService {
  API_USER_PROFILE = API + '/user/profile/'
  API_USER_PROFILE_UPDATE = API + '/user/me/update'
  API_USER_STATISTIC = API + '/checks/me/statistics-1'
  API_USER_CHECKS = API + '/checks/me'
  API_USER_CHECK_SAVE = API + '/checks/me/save'

  async getUserProfile(userid: number) {
    return await requestBuilder.MakeGetRequest(this.API_USER_PROFILE+
      userid)
  }

  async postUserProfileUpdate(Data:object) {
    return await requestBuilder.MakePostRequest(this.API_USER_PROFILE_UPDATE,Data)
  }

  async getUserStatistic() {
    return await requestBuilder.MakeGetRequest(`${this.API_USER_STATISTIC}`)
    // requestBuilder.makeSetDefaults()
    // axios.defaults.headers.common['accept'] = 'application/json'
    //  return await axios.get(`${this.API_USER_STATISTIC}`).then((res)=>{return res}).catch((error)=>{
    //   console.error(error)
    // })

  //   console.log("getUserStatistic")
  //    return await axios.get(`${this.API_USER_STATISTIC}`, {
  //     headers: {
  //       'Content-Type': 'application/json; charset=utf-8'
  //     }
  // }).then((res)=>{return res}).catch((error)=>{
  //     console.error(error)
  //   })

  }
  async getUserChecks() {

    return await requestBuilder.MakeGetRequest(this.API_USER_CHECKS)

  }
  async postUserCheckCreate(Data:object) {


    return await requestBuilder.MakePostRequest(this.API_USER_CHECK_SAVE,Data)

  }
}
const userService = new UserService() 

export default userService;
