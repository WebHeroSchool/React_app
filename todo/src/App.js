import React from 'react';
import logo from './logo.svg';
import './App.css';

import {count, length} from './number'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* добавлениe в разметку объекта style; */}
        <p style ={{
            color: 'lightblue',
          }}>
          Hello, World!
        </p>

        <p>
          {count * length}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
