import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import MessageComponent from './message-component/message-component';

class App extends Component {

  constructor(props) {
    super(props);
    this.user = 0;
    this.computer = 0;
    this.options = ['Rock', 'Paper', 'Scissors'];
    this.state = {user: 0, computer: 0};
  }

  getOption(data) {
    var pcPick = Math.floor(Math.random() * 3);
    switch(data) {
      case 'Rock':
        switch(this.options[pcPick]) {
          case 'Scissors':
          this.setState({
            user: this.state.user + 1,
            computer: this.state.computer
          });
            break;
          case 'Paper':
            this.setState({
              user: this.state.user,
              computer: this.state.computer + 1
            });
            break;
          default:
            break;
        }
        break;

      case 'Paper':
        switch(this.options[pcPick]) {
          case 'Rock':
            this.setState({
              user: this.state.user + 1,
              computer: this.state.computer
            });
            break;
          case 'Scissors':
            this.setState({
              user: this.state.user,
              computer: this.state.computer + 1
            });
            break;
          default: 
            break;
        }
        break;
      default:
        switch(this.options[pcPick]) {
          case 'Paper':
            this.setState({
              user: this.state.user + 1,
              computer: this.state.computer
            });
            break;
          case 'Rock':
            this.setState({
              user: this.state.user,
              computer: this.state.computer + 1
            });
            break;
          default: 
            break;
        }
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <h1 className="App-title">{this.state.user} - {this.state.computer}</h1>
        </header>
        <p className="App-intro">
          Please make a selection:
        </p>
        <div id="adam">
          <MessageComponent data='Rock' onSelectOption={this.getOption.bind(this)}></MessageComponent>
          <MessageComponent data='Paper' onSelectOption={this.getOption.bind(this)}></MessageComponent>
          <MessageComponent data='Scissors' onSelectOption={this.getOption.bind(this)}></MessageComponent>
        </div>
      </div>
    );
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
