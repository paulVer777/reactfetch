import React from 'react'
import LoginByGoogle from "./LogInByGoogle";



class LoginForms extends React.Component{

    LoginByGoogle=()=>{}


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