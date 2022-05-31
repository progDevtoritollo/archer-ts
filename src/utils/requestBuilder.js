import axios from "axios";

class request {
  async makeSetDefaults(token) {
    axios.defaults.headers.common["accept"] = "application/json";
    axios.defaults.headers.common["Content-Type"] = "application/json";
  }
  setToken = (token) => {
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.setItem("TOKEN", token);
  };
}
const requestBuilder = new request();

export default requestBuilder;
