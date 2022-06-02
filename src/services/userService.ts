import axios from 'axios';

import {API} from "../commons"
import requestBuilder from "./../utils/requestBuilder"

class UserService {
  API_USER_PROFILE = API + '/user/profile/'
  API_USER_PROFILE_UPDATE = API + '/user/me/update'
  API_USER_STATISTIC = API + '/user/statistic'
  API_USER_CHECKS = API + '/user/checks'
  API_USER_CHECK_CREATE = API + '/user/check/create'


  async getUserProfile(id: number) {
    requestBuilder.makeSetDefaults()

    let response
    response = await axios.get(this.API_USER_PROFILE+
      `${id}`)
    return response.data
  }
  async postUserProfileUpdate(Data:object) {
    requestBuilder.makeSetDefaults()

    let res
    res = await axios.post(`${this.API_USER_PROFILE_UPDATE}`,Data).then((res)=>{
      console.log(res)
      return res
    }).catch((err)=>{
      console.error(err)
    })
    return res
  }
  async getUserStatistic() {
    requestBuilder.makeSetDefaults()

    let response
    response = await axios.get(`${this.API_USER_STATISTIC}`)
    return response.data
  }
  async getUserChecks() {
    requestBuilder.makeSetDefaults()

    let response
    response = await axios.get(`${this.API_USER_CHECKS}`)
    return response.data
  }
  async postUserCheckCreate(Data:object) {
    requestBuilder.makeSetDefaults()

    let response
    response = await axios.post(`${this.API_USER_CHECK_CREATE}`,Data)
    return response.data
  }
}
const userService = new UserService() 

export default userService 
