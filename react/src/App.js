import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';

class App extends Component {

 constructor(props){
  super(props);
  this.state = {
    clicks: 0,
    show: true
  }
 }

 incrementItem = () => {
   this.setState({ clicks: this.state.clicks + 1 });
 }

 decrementItem = () => {
   if(this.state.clicks >= 1){
    this.setState({ clicks: this.state.clicks - 1 });
   }
   
 }


  render() {
    return (
      <div className="text-center">
        <h2>Incremento y decremento</h2>
        <button type="button" onClick={this.incrementItem}>Incrementar</button>
        <button type="button" onClick={this.decrementItem}>Decrementar</button>
        <h6>Total: { this.state.clicks }</h6>
      </div>
    )
  }
}

export default App;
