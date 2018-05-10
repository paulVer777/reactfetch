import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Counter from './Components/Counter'
import Chat from './Components/Chat'

class App extends Component {





    render() {

        return (

            <div>

                <Counter/>
                <Chat/>

            </div>

        )
    }
}

export default App;
