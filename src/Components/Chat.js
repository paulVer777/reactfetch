import React from 'react'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {auth,database} from "../firebase"; // importujemy biblioteke firebase
import {mapObjectToArray, utils} from '../utils'
import MenuItem from 'material-ui/MenuItem';
import Moment from 'moment'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';





class Chat extends React.Component {

    state = {
        name: 'Pablo',
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
        user: this.state.name,
        timestamp: Date.now()
    }
    ).then(()=>this.setState({newMessage:""}));

    render() {
        return (
            <div>


               <AppBar

               showMenuIconButton={false}
               iconElementRight={

                   <IconButton

                   onClick={()=>auth.signOut()}>

                   <NavigationClose/>

                   </IconButton>

               }

               />

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


                <div>

                    {
                        this.state.messages.map((value, key) => (
                            <MenuItem

                                primaryText={`${value.user}:(${(Moment(value.timestamp).format('h:mm:ss'))})${value.message}`}

                            />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Chat