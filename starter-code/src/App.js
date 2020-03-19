import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/table/Table'
import contacts from './contacts.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IronContacts</h1>
        </header>
        <div className="App-intro">
          <Table {...contacts} />
        </div>
      </div>
    );
  }
}

export default App;
