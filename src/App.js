import React from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './Posts/Posts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Hello React!</h3>
        <Posts userId="3" detail="true"/>
      </header>
    </div>
  );
}

export default App;
