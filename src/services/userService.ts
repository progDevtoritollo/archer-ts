import axios from 'axios';
import {API} from "../commons"

class UserService {
  API_USER_PROFILE = API + '/user/profile'
  API_USER_PROFILE_UPDATE = API + '/user/update'
  API_USER_STATISTIC = API + '/user/statistic'
  API_USER_CHECKS = API + '/user/checks'
  API_USER_CHECK_CREATE = API + '/user/check/create'


  async getUserProfile() {
    axios.defaults.headers.common['accept'] = 'application/json'
    axios.defaults.headers.common['Content-Type'] = 'application/json'

    let response
    response = await axios.get(`${this.API_USER_PROFILE}`)
    return response.data
  }
  async postUserProfileUpdate(Data:object) {
    axios.defaults.headers.common['accept'] = 'application/json'
    axios.defaults.headers.common['Content-Type'] = 'application/json'

    let response
    response = await axios.get(`${this.API_USER_PROFILE_UPDATE}`,Data)
    return response.data
  }
  async getUserStatistic() {
    axios.defaults.headers.common['accept'] = 'application/json'
    axios.defaults.headers.common['Content-Type'] = 'application/json'

    let response
    response = await axios.get(`${this.API_USER_STATISTIC}`)
    return response.data
  }
  async getUserChecks() {
    axios.defaults.headers.common['accept'] = 'application/json'
    axios.defaults.headers.common['Content-Type'] = 'application/json'

    let response
    response = await axios.get(`${this.API_USER_CHECKS}`)
    return response.data
  }
  async postUserCheckCreate(Data:object) {
    axios.defaults.headers.common['accept'] = 'application/json'
    axios.defaults.headers.common['Content-Type'] = 'application/json'

    let response
    response = await axios.post(`${this.API_USER_CHECK_CREATE}`,Data)
    return response.data
  }
}
const userService = new UserService() 

export default userService 
