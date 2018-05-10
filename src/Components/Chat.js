import React from 'react'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class Chat extends React.Component {

    state = {
        name: 'Mateusz',
        newMessage: '',
        messages: null
    }


   sfi=(event,value)=>(

       this.setState({

       newMessage:value


       })
   );





    render() {
        return (
            <div>
                <TextField
                    fullWidth={true}
                    value={this.state.newMessage}
                    onChange={this.sfi}
                />
                <RaisedButton
                    label={'Send!'}
                    primary={true}
                    fullWidth={true}
                />
            </div>
        )
    }
}
export default Chat