import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {

    state = {

        newTask: ""

    };


    newTaskHandler = (event, value) => {

        this.setState({

            newTask: value

        })

    };

componentDidMount(){   //pobranie danych z bazy

    fetch('https://jfddl4-sandbox.firebaseio.com/pawelp/tasks/.json')

        .then(response => response.json())

        .then(tasks => console.log(tasks))


}

    saveToDb = (data) => fetch( //przesłanie danych do bazy
        'https://jfddl4-sandbox.firebaseio.com/pawelp/tasks/.json',
        {
            method: 'POST',
            body: JSON.stringify(data) // zeby przeslac potrzebujemy zmienic ten obiekt na string
        }
    );

    render() {


        return (

            <div>

                <TextField

                    value={this.state.newTask}
                    onChange={this.newTaskHandler}
                />
                <RaisedButton

                    onClick={() => this.saveToDb(this.state.newTask)}

                />

            </div>

        )
    }
}

export default App;
