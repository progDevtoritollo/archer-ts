import axios from "axios";

class request {
  async makeSetDefaults() {
    axios.defaults.headers.common["accept"] = "application/json";

    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("TOKEN");
  }
  setToken = (token) => {
    axios.defaults.headers.common["Authorization"] = localStorage.setItem(
      "TOKEN",
      token
    );
  };
  async MakeGetRequest(path) {
    return await axios.get(path, {
      data: {},
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("TOKEN"),
      },
    });
  }
  async MakePostRequest(path, body) {
    return await axios.post(path, body, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("TOKEN"),
      },
    });
  }
}
const requestBuilder = new request();

export default requestBuilder;
