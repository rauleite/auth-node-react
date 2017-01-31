import { Card, CardText, CardTitle } from 'material-ui/Card'
import { RaisedButton, TextField } from 'material-ui'
import React, { PropTypes } from 'react'

import { Link } from 'react-router'

const ForgotForm = ({
  onSubmit,
  onChange,
  errors,
  user
}) => (
  <Card>
    <form action='/' onSubmit={onSubmit}>
      <CardTitle title='Esqueceu?' subtitle="Sem problema, informe seu email de acesso" />
      {errors.summary && <p className='error-message'>{errors.summary}</p>}
      <div>
        <TextField
          floatingLabelText='Email'
          name='email'
          errorText={errors.email}
          onChange={onChange}
          value={user.email} />
      </div>
      <p />
      <br />
      <div>
        <RaisedButton type='submit' label='SOLICITAR' primary />
      </div>
      <p />
      <br />
    </form>
  </Card>
)

ForgotForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
}

export default ForgotForm
