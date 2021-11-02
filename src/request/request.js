import axios from "axios";

export function getPosts() {
  return axios
      .get("http://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      })

}

console.log('spin the wheel..', getPosts())