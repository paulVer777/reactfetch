import React from 'react'
import LoginByGoogle from "./LogInByGoogle";
import {auth, googleProvider} from "../../firebase";
import LoginByEmailAndPassword from "../LoginByEmailAndPassword";


class LoginForms extends React.Component {

    LoginByGoogle = () => {
        auth.signInWithPopup(googleProvider)
    } //wyswietli okno logowania do google


    render() {


        return (


            <div>


                <LoginByEmailAndPassword

                    emailValue={''}
                    onEmailChange={() => {
                    }}
                    passwordValue={''}
                    onPasswordChange={() => {
                    }}
                    onLogInClick={() => {
                    }}

                />

                <LoginByGoogle
                    onLogInClick={this.LoginByGoogle}
                />

                <LoginByGoogle

                    onLogInClick={this.LoginByGoogle}

                />

            </div>

        )
    }
}


export default LoginForms