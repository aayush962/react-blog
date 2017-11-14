import axios from 'axios'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=yoloyoloyo76t6575lo'

export function fetchPosts(){
  const url = `${ROOT_URL}/posts${API_KEY}`
  const request = axios.get(url)

  return {
    type: 'FETCH_POSTS',
    payload: request
  }
}
