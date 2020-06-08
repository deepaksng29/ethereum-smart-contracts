import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from "./web3";
import lotteryContract from "./lottery";
import lottery from './lottery';

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
    try{
      this.setState({ message: "Entering you in the competition..." });
      event.preventDefault();
  
      const accounts = await web3.eth.getAccounts();
      
      await lottery.methods.enter().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, "ether")
      });
  
      this.setState({ message: "You have been entered in the competition!" });
      this.componentDidMount();
    } catch (e) {
      this.setState({ message: "Transaction failed." });
    }
  }

  /* ---- Rendering the component using JSX ---- */
  render() {
    return (
      <div>
        <h2>Lottery Contract</h2>      
        <p>
          This contract is managed by { this.state.manager }! <br />
          There are currently { this.state.players.length } players competing to win { web3.utils.fromWei(this.state.balance, "ether") } ETH!
        </p>
        <hr />
        <form onSubmit = { this.onSubmit }>
          <h4>Want to try your luck?</h4>
          <div>
            <label>Amount of ETH to enter: </label>
            <input
              onChange = { event => this.setState({ value: event.target.value }) } />
          </div>
          <button>Enter</button>
        </form>
        <hr />
        <p>{ this.state.message }</p>
      </div>
    )
  }
}

export default App;
