import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "d768ac92f48f401d98848ce9f8f07594", //valid
    // key: "bf2f910a2ca54ad4845a85a13b98cc16", //invalid
  },
});
