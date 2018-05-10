import React from 'react'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {database} from "../firebase"; // importujemy biblioteke firebase


class Chat extends React.Component {

    state = {
        name: 'Mateusz',
        newMessage: '',
        messages: null
    };
   sfi=(event,value)=>(
       this.setState({
       newMessage:value
       })
   );


   addMessage=()=> database.ref('/chat').push({


       message:this.state.newMessage,
       user:this.state.name,
       timestamp:Data.now()




   })









    render() {
        return (
            <div>
                <TextField
                    fullWidth={true}
                    value={this.state.newMessage}
                    onChange={this.sfi}
                />
                <RaisedButton

                    onClick={this.addMessage}
                    label={'Send!'}
                    primary={true}
                    fullWidth={true}
                />
            </div>
        )
    }
}
export default Chat