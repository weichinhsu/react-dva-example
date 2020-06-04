import axios from 'axios'

const API = 'https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=4'

export function get_opendata() {
  return axios.get(API)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
}