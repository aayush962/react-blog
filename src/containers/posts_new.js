import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import { createPost } from '../actions/index'

class PostsNew extends React.Component{

  renderField(field){
    return(
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        {field.meta.error}
      </div>
    )
  }

  render(){
    return(
      <form>
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
    errors.title = "Enter Categories"
  }
  if(!values.content){
    errors.title = "Enter some content"
  }
  return errors
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew)
