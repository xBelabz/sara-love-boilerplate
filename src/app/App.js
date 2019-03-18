import React, { Component } from 'react';
import heart from '../assets/heart.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Je t'aime beaucoup mon amour</h1>
        <img src={heart} className="App-logo" alt="heart" />
          <p><code>T'es toute ma vie</code></p>
          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn my life
          </a>
        </header>
      </div>
    );
  }
}

export default App;
