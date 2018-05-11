import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Counter from './Components/Counter'
import Chat from './Components/Chat'
import Auth from './Components/Auth'



class App extends Component {





    render() {

        return (

            <Auth>


                <Chat/>

            </Auth>

        )
    }
}

export default App;
