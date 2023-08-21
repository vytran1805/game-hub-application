import axios from "axios";

// Fetching data using react-query
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "d768ac92f48f401d98848ce9f8f07594", //valid
    // key: "bf2f910a2ca54ad4845a85a13b98cc16", //invalid
  },
});

/**
 * This class contains methods to talk to the server and send HTTP requests to our backend
 */
class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll() {
    return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
  }
}

export default APIClient;
