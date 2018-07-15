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
    this.state = {user: 0, computer: 0, userRound: '', pcRound: ''};
  }

  getOption(data) {
    var pcPick = Math.floor(Math.random() * 3);
    var userStrike = 'You picked ' + data + '!';
    var pcStrike = 'Computer picked ' + this.options[pcPick] + '!';
    switch(data) {
      case 'Rock':
        switch(this.options[pcPick]) {
          case 'Scissors':
          this.setState({
            user: this.state.user + 1,
            computer: this.state.computer,
            userRound: userStrike,
            pcRound: pcStrike
          });
            break;
          case 'Paper':
            this.setState({
              user: this.state.user,
              computer: this.state.computer + 1,
              userRound: userStrike,
              pcRound: pcStrike
            });
            break;
          default:
            this.setState({
              user: this.state.user,
              computer: this.state.computer,
              userRound: userStrike,
              pcRound: pcStrike
            });
            break;
        }
        break;

      case 'Paper':
        switch(this.options[pcPick]) {
          case 'Rock':
            this.setState({
              user: this.state.user + 1,
              computer: this.state.computer,
              userRound: userStrike,
              pcRound: pcStrike
            });
            break;
          case 'Scissors':
            this.setState({
              user: this.state.user,
              computer: this.state.computer + 1,
              userRound: userStrike,
              pcRound: pcStrike
            });
            break;
          default: 
            this.setState({
              user: this.state.user,
              computer: this.state.computer,
              userRound: userStrike,
              pcRound: pcStrike
            });
            break;
        }
        break;
      default:
        switch(this.options[pcPick]) {
          case 'Paper':
            this.setState({
              user: this.state.user + 1,
              computer: this.state.computer,
              userRound: userStrike,
              pcRound: pcStrike
            });
            break;
          case 'Rock':
            this.setState({
              user: this.state.user,
              computer: this.state.computer + 1,
              userRound: userStrike,
              pcRound: pcStrike
            });
            break;
          default: 
            this.setState({
              user: this.state.user,
              computer: this.state.computer,
              userRound: userStrike,
              pcRound: pcStrike
            });
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
          <h1 className="App-title">Player vs Computer</h1>
          <h1 className="App-title">{this.state.user} - {this.state.computer}</h1>
        </header>
        <p className="App-intro">
          Please make a selection:
        </p>
        <p className="App-intro-temp">
          {this.state.userRound}
        </p>
        <p className="App-intro-temp">
          {this.state.pcRound}
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
