import React from 'react'
import {database} from "../firebase";

class Counter extends React.Component {


    state = {

        counter: 0

    };

    inc = () => (

        this.setState({

            counter: this.state.counter + 1

        })
    );

    dec = () => (

        this.setState({

            counter: this.state.counter - 1

        })
    );


    componentDidMount() {

        database.ref('/counter') //wskazuje na miejsce w bazie danych, wystarczy ukosnik bo glowny adres zapisany jest w firebase js.
            .on( //jesli stan sie zmieni, zrob cos raz
                'value',
                (snapshot) => { //zawiera migawke aktualnego stanu z bazy danych, aktualny stan

                    this.setState({

                        counter: snapshot.val()

                    })
                }
            )

    }

    saveToDb = (data) => (

        database.ref('/counter')
            .set(data)

    )

    render() {

        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={() => this.saveToDb(this.state.counter + 1)}>+</button>
                <button onClick={() => this.saveToDb(this.state.counter - 1)}>-</button>
            </div>

        )
    }
}

export default Counter