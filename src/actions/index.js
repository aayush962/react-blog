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

export function createPost(values, callback){
  const url = `${ROOT_URL}/posts${API_KEY}`
  const request = axios.post(url, values).then(callback)

  return {
    type: 'CREATE_POST',
    payload: request
  }
}

export function fetchPostById(id){
  const url = `${ROOT_URL}/posts/${id}${API_KEY}`
  const request = axios.get(url)

  return {
    type: 'FETCH_POST',
    payload: request
  }
}
