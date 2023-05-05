import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "76fe41bbbd9d4d7b99113adc15d945bc",
  },
});
