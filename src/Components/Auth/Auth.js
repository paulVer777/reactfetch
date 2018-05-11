import React from 'react'
import {auth} from "../../firebase";


class Auth extends React.Component {

    state = {
        isLoggedIn: false
    }


    componentDidMount() {

        auth.onAuthStateChanged( //funkcja sprawdza czy uzytkownik jest zalogowany
            user => {


                if (user) {

                    this.setState({isLoggedIn: true})
                }
                else {

                    this.setState({isLoggedIn: false})
                }

            }
        )


    }


    render() {


        return (

            <div>

                {

                    this.state.isLoggedIn ? //jesli zalogowany wyswietl dzieci(chat), jesli nie to wyswietl zaloguj sie
                        this.props.children
                        :
                        'Zaloguj się!'

                }
            </div>

        )
    }
}


export default Auth