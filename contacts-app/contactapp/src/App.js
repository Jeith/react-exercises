import React, { Component } from 'react';
import Navbar from './Navbar.js';
import './App.css';
import Form from './Form.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
        <h1>Add Contacts</h1>
        <Form />
      </div>
    );
  }
}

export default App;
