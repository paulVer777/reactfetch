import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

const LoginByEmailAndPassword = (props) => (


    <div>
        <TextField

            name="email"
            value={props.emailValue}
            onChange={props.onEmailChange}
            fullWidth={true}

        />
        <TextField

            name="password"
            value={props.passwordValue}
            onChange={props.onPasswordChange}
            fullWidth={true}
        />

        <RaisedButton

            label={'Login'}
            onClick={props.onLogInClick}

        />
    </div>

)

export default LoginByEmailAndPassword