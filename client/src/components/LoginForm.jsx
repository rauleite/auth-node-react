import { Card, CardText, CardTitle } from 'material-ui/Card'
import React, { PropTypes } from 'react'

import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

const LoginForm = ({onSubmit, onChange, errors, successMessage, user}) => (
  <Card >
    <form action="/" onSubmit={onSubmit}>
      <CardTitle title="Login" />
      {successMessage && <p className='success-message'>{successMessage}</p>}
      {errors.summary && <p className='error-message'>{errors.summary}</p>}
      <div>
        <TextField
          floatingLabelText='Email'
          name='email'
          errorText={errors.email}
          onChange={onChange}
          value={user.email} />
      </div>
      <div>
        <TextField
          floatingLabelText='Senha'
          type='password'
          name='password'
          onChange={onChange}
          errorText={errors.password}
          value={user.password} />
      </div>
        <Link to={'/forgot'}> Esqueceu a senha?</Link>
      <p/><br/>            
      <div>
        <RaisedButton type='submit' label='ENTRAR' primary />
      </div>
      <CardText>      
        Não possui uma conta?
        <Link to={'/signup'}> Crie uma</Link>.
      </CardText>
  </form>
</Card>
)

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
}

export default LoginForm
