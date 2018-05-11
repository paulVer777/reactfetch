import React from 'react'
import LoginByGoogle from "./LogInByGoogle";
import {auth,googleProvider} from "../../firebase";



class LoginForms extends React.Component{

    LoginByGoogle=()=>{auth.signInWithPopup(googleProvider)} //wyswietli okno logowania do google


    render() {


        return (



            <div>

                <LoginByGoogle

                onLogInClick={this.LoginByGoogle}

                />





            </div>





        )
    }
}


export default LoginForms