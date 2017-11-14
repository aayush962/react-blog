import _ from 'lodash'

export default function(state = {}, action){
  switch(action.type){
    case 'FETCH_POST':
      console.log('fetching post')
      return { ...state, [action.payload.data.id]: action.payload.data }
    case 'FETCH_POSTS':
      console.log('fetching posts')
      return _.mapKeys(action.payload.data, 'id')
    default:
      return state
  }
}
