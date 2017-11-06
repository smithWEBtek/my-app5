import React, { Component } from 'react';

const number = Math.round(Math.random(0,1)*10)

export class Tickle extends Component {
  tickle = () => {
    console.log('tee hee!')
  }
  pickle = () => {
    console.log('I want pickles!')
  }
  fickle = () => {
    console.log('you fickle dog!')
  }
  zickle = () => {
    console.log('you wanna copy this?!')
  }
  
  render(){
    return(
      <div>
        <button key='asdf' onMouseOver={this.pickle}>Pickle me!</button>
        <button key='zxcv' onMouseOver={this.fickle}>Fickle me!</button>
        <button key='qwer' onMouseOver={this.tickle}>Tickle me!</button>
        <button key='asdf1' onCopy={this.zickle}>Copy me!</button>
      </div>
    );
  }
}

