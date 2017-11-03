import React, {Component} from 'react';
import {Link} from 'react-router';
import logo from './logo.png';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                    <Link to="/test" activeClassName="active" activeStyle={{color: '#c00'}}>Posts</Link>
                </p>
            </div>
        );
    }
}

export default App;
