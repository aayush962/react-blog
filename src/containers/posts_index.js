import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchPosts } from '../actions/index'

class PostsIndex extends React.Component{

  componentDidMount(){
    this.props.fetchPosts()
  }

  renderPosts(){
    return _.map(this.props.posts, post => {
      return <li key={post.id}>{post.title}</li>
    })
  }

  render(){
    if(!this.props.posts){
      return <p>Fetching Posts</p>
    }
    return(
      <div>
        <Link to='/posts/new'>Create New</Link>
        <ul>
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchPosts: fetchPosts
  }, dispatch)
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex)
