import React from 'react';
import logo from './logo.svg';
import './App.css';
const  someVariable = 'Hello!';
const logics = true;
const ternaryOperator = false;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* добавлениe в разметку объекта style; */}
        <p style ={{
            color: 'lightblue',
            
            // добавление числа:
            fontSize: 45
          }}>
          Hello, World!
        </p>

        {/* вывод значения переменной {}; */}
        <p
        style ={{
          // добавление арифметической операции:
          fontSize: 20+14,
        }}>
          {someVariable}
        </p>
        
        {/* добавление результата логической операции */}
        <p>
          {logics && 'Logics is true'}
        </p>

        {/* добавление результата тернарного условия; */}
        <p>
          {ternaryOperator ? 'Ternary is true' : 'Ternary is false'}
        </p>

        {/* добавление объектов: */}
        <p>
          {null}
          {undefined}
          {false}
          {true}
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
