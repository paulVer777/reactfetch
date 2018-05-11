import React from 'react'
import LoginByGoogle from "./LogInByGoogle";
import {auth, googleProvider} from "../../firebase";
import LoginByEmailAndPassword from "../LoginByEmailAndPassword";


class LoginForms extends React.Component {

    state={

    logInEmail:'',
    logInPassword:''
    };

    LoginByGoogle = () => {
        auth.signInWithPopup(googleProvider)
    } //wyswietli okno logowania do google


    loginByEmailAndPassword = () => auth.signInWithEmailAndPassword(
        this.state.logInEmail,
        this.state.logInPassword
    ).catch(e=>alert('something went wrong!!!'))


    onLogInEmailChange = (e, value) => this.setState({logInEmail: value})
    onLogInPasswordChange = (e, value) => this.setState({logInPassword: value}) //login forms obsluguje caly stan


    render() {


        return (

            <div>
                <LoginByEmailAndPassword

                    emailValue={this.state.logInEmail}
                    onEmailChange={this.onLogInEmailChange}
                    passwordValue={this.state.logInPassword}
                    onPasswordChange={this.onLogInPasswordChange
                    }
                    onLogInClick={this.loginByEmailAndPassword
                    }

                />

                <LoginByGoogle
                    onLogInClick={this.LoginByGoogle}
                />



            </div>
        )
    }
}

export default LoginForms




