import axios from 'axios';

import {API} from "../commons"
import requestBuilder from "./../utils/requestBuilder"

class UserService {
  API_USER_PROFILE = API + '/user/profile/'
  API_USER_PROFILE_UPDATE = API + '/user/me/update'
  API_USER_STATISTIC = API + '/checks/me/statistics-1'
  API_USER_CHECKS = API + '/user/checks'
  API_USER_CHECK_SAVE = API + '/checks/me/save'

  async getUserProfile(userid: number) {
    requestBuilder.makeSetDefaults()

  await axios.get(this.API_USER_PROFILE+
      `${userid}`).then((res)=>{return res}).catch((error)=>{
        console.error(error)
      })
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
     await axios.get(`${this.API_USER_STATISTIC}`).then((res)=>{return res}).catch((error)=>{
      console.error(error)
    })
  }
  async getUserChecks() {
    requestBuilder.makeSetDefaults()

    await axios.get(`${this.API_USER_CHECKS}`).then((res)=>{return res}).catch((error)=>{
      console.error(error)
    })
  }
  async postUserCheckCreate(Data:object) {
    requestBuilder.makeSetDefaults()

 await axios.post(`${this.API_USER_CHECK_SAVE}`,Data).then((res)=>{return res}).catch((error)=>{
      console.error(error)
    })
  }
}
const userService = new UserService() 

export default userService 
