import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from "./web3";
import lotteryContract from "./lottery";

class App extends Component {
  /* ---- Initialisation of the state of the main component ---- */
  state = {
    manager: "",
    players: [],
    balance: "",
    value: "",
    message: ""
  };

  /* ---- Network requests to the Ethereum blockchain ---- */
  async componentDidMount() {
    this.setState({ message: "Loading..." });
    const manager = await lotteryContract.methods.manager().call();
    const players = await lotteryContract.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lotteryContract.options.address);
    this.setState( { manager, players, balance, message: "" } );
  }

  
  /* ---- Event handling for entering lottery ---- */
  onSubmit = async (event) => {
    try {
      this.setState({ message: "Entering you in the competition..." });
      event.preventDefault();
  
      const accounts = await web3.eth.getAccounts();
      
      await lotteryContract.methods.enter().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, "ether")
      });
  
      this.setState({ message: "You have been entered in the competition!" });
      this.componentDidMount();
    } catch (e) {
      this.setState({ message: "Transaction failed." });
    }
  }

  onClick = async (event) => {
    try {
      this.setState({ message: "Picking a winner..." });
      
      const accounts = await web3.eth.getAccounts();

      await lotteryContract.methods.pickWinner().send({
        from: accounts[0]
      });

      this.setState({ message: "A winner has been picked! "});

    } catch (e) {
      this.setState({ message: "Operation failed. "});
    }
  }

  /* ---- Rendering the component using JSX ---- */
  render() {
    return (
      <div className = "container">
        <div className = "jumbotron">
          <h2>Lottery Contract</h2>      
          <p>
            This contract is managed by { this.state.manager }! <br />
            There are currently { this.state.players.length } players competing to win { web3.utils.fromWei(this.state.balance, "ether") } ETH!
          </p>
        </div>
        <hr />
        <div className = "jumbotron">
          <form onSubmit = { this.onSubmit }>
            <div className = "row">
              <h4>Want to try your luck?</h4>
            </div>
            <div className = "row">
              <div className = "col">
                <label>Amount of ETH to enter: </label>
              </div>
              <div className = "col">
                <input
                  onChange = { event => this.setState({ value: event.target.value }) } />
              </div>
            </div>
            <div className = "row center">
              <button>Enter</button>
            </div>
          </form>
          <hr />
          <div className = "alert alert-danger alert-dismissible">
            <p>{ this.state.message }</p>
          </div>
          <hr />
          <div className = "row center">
            <h4>Ready to pick a winner?</h4> 
            <button onClick = { this.onClick }>Pick a winner!</button>
          </div>
          <hr />
        </div>
      </div>
    )
  }
}

export default App;
