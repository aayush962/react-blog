import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchPostById } from '../actions/index'

class PostShow extends React.Component{

  componentDidMount(){
    console.log(this.props.match.params)
    const { id } = this.props.match.params
    this.props.fetchPostById(id)
  }

  render(){
    const { post } = this.props
    if(!post){
      return <span>Loading.....</span>
    }
    return(
      <div>
        <Link to="/">Back to home</Link>
        <p>{post.title}</p>
      </div>
    )
  }
}

function mapStateToProps({ posts }, ownProps){
  return { post: posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { fetchPostById })(PostShow)
