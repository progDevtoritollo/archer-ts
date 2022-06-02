import axios from "axios";

class request {
  async makeSetDefaults() {
    axios.defaults.headers.common["accept"] = "application/json";
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("TOKEN");
  }
  setToken = (token) => {
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.setItem("TOKEN", token);
  };
}
const requestBuilder = new request();

export default requestBuilder;
