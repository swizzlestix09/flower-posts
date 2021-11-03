import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/posts";

export function getAllPosts() {
  return axios
    .request({
      method: "get",
      url
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return `Error: ${err}`;
    });
}
