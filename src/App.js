import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageComponent from './message-component/message-component';

class App extends Component {

  getOption(data) {
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Please make a selection:
        </p>
        <div id="adam">
          <MessageComponent data='Rock' onSelectOption={this.getOption}></MessageComponent>
          <MessageComponent data='Paper' onSelectOption={this.getOption}></MessageComponent>
          <MessageComponent data='Scissors' onSelectOption={this.getOption}></MessageComponent>
        </div>
      </div>
    );
  }
}

export default App;
