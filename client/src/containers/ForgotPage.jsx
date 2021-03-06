import React, { PropTypes } from 'react'

import ForgotForm from '../components/ForgotForm.jsx'

class ForgotPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor (props, context) {
    super(props, context)

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: ''
      }
    }

    this.processForm = this.processForm.bind(this)
    this.changeUser = this.changeUser.bind(this)
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm (event) {

    // prevent default action. in this case, action is the form submission event
    event.preventDefault()

    // create a string for an HTTP body message
    const email = encodeURIComponent(this.state.user.email)
    const formData = `email=${email}`

    // create an AJAX request
    const xhr = new XMLHttpRequest()
    xhr.open('post', '/auth/forgot')
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    xhr.responseType = 'json'
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        })

         this.successMessage = xhr.response.message
        // set a message
        localStorage.setItem('successMessage', xhr.response.message)

        // make a redirect
        this.context.router.replace('/login')
      } else {
        // failure

        const errors = xhr.response.errors ? xhr.response.errors : {}
        errors.summary = xhr.response.message

        this.setState({
        errors})
      }
    })
    xhr.send(formData)
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser (event) {
    const field = event.target.name
    const user = this.state.user
    user[field] = event.target.value

    this.setState({
    user})
  }

  /**
   * Render the component.
   */
  render () {
    console.log('--->', this.successMessage)
    return (
      <ForgotForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user} />
    )
  }

}

ForgotPage.contextTypes = {
  router: PropTypes.object.isRequired
}

export default ForgotPage
