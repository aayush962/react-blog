import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import { createPost } from '../actions/index'

class PostsNew extends React.Component{

  renderField(field){
    const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`
    return(
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    )
  }

  onSubmit(values){
    this.props.createPost(values)
  }

  render(){
    const { handleSubmit } = this.props
    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="title"
          component={this.renderField}
          label="Title"
        />
        <Field
          name="categories"
          component={this.renderField}
          label="Categories"
        />
        <Field
          name="content"
          component={this.renderField}
          label="Content"
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

function validate(values){
  const errors = {}
  if(!values.title){
    errors.title = "Enter a Title"
  }
  if(!values.categories){
    errors.categories = "Enter Categories"
  }
  if(!values.content){
    errors.content = "Enter some content"
  }
  return errors
}

function mapDispatchToProps(){

}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew)
