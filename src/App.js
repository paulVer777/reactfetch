import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {

    state = {


        counter:null

    };

    inc = () => (

        this.setState({

            counter: this.state.counter + 1


        }, this.saveToDb)

    );

    dec = () => (

        this.setState({

            counter: this.state.counter - 1


        }, this.saveToDb)

    );

    componentDidMount() {


        fetch('https://jfddl4-sandbox.firebaseio.com/pawelp/counter/.json')

            .then(response => response.json())
            .then(data => this.setState({

                counter: data


            }))


    }


    saveToDb = () => fetch( //przesłanie danych do bazy
        'https://jfddl4-sandbox.firebaseio.com/pawelp/.json',
        {
            method: 'PUT',
            body: JSON.stringify(this.state.counter) // zeby przeslac potrzebujemy zmienic ten obiekt na string
        }
    );


    render() {

        if (this.state.counter === null) {
            return <span>Loading</span>

        }


        return (

            <div>



                <h1>{this.state.counter}</h1>
                <button onClick={() => {
                    this.inc()
                }}>+
                </button>
                <button onClick={() => {
                    this.dec()
                }}>-
                </button>

            </div>

        )
    }
}

export default App;
