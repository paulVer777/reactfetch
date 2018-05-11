import React from 'react'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {database} from "../../firebase"; // importujemy biblioteke firebase
import {mapObjectToArray, utils} from '../../utils'

import ChatAppBar from "./ChatAppBar";
import Message from './Message'


class Chat extends React.Component {

    state = {

        newMessage: '',
        messages: []
    };

    sfi = (event, value) => (
        this.setState({
            newMessage: value
        })
    );

    componentDidMount() {

        database.ref('/chat') //wskazuje na miejsce w bazie danych, wystarczy ukosnik bo glowny adres zapisany jest w firebase js.
            .on( //jesli stan sie zmieni, zrob cos raz(once) lub (cyklicznie)
                'value',
                (snapshot) => { //zawiera migawke aktualnego stanu z bazy danych, aktualny stan

                    this.setState({

                        messages: mapObjectToArray(snapshot.val()).reverse(), //konwertuje na tablice z obiektami
                    })
                }
            )
    }
    addMessage = () => database.ref('/chat').push({

        message: this.state.newMessage,
        user: auth.currentUser.displayName,
        email:auth.currentUser.email,
        avatar:auth.currentUser.photoURL,
        timestamp: Date.now()
    }
    ).then(()=>this.setState({newMessage:""}));

    render() {
        return (
            <div>

               <ChatAppBar/>

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
                {/*<h1>{this.state.messages}</h1>*/}


                {
                    this.state.messages.map((value, index) => (
                        <Message
                            key={value.key}
                            message={value}
                        />
                    ))
                }



            </div>
        )
    }
}

export default Chat