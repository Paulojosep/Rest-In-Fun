import React, {Component} from 'react';
import './App.css';
import Login from './pages/login';
import api from './services/api'


class App extends Component {

    constructor(props){
        super(props)

        api
            .get('/pessoas')
            .then(resultado => {
                console.log(resultado)
            })
    }

    render() {
        return (
            <div className="App">
                <Login />
            </div>
        );
    }
}

export default App;