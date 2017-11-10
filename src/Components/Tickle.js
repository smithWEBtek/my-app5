import React, { Component } from 'react';

const number = Math.round(Math.random(0,1)*10)

export default class Tickle extends Component {
  constructor(){
    super();
    this.state = {
      msg: 'my tickle msg is set'
    }
  }

  tickle = () => {
    this.setState({
      msg: 'You tickled me, so my msg changed!',
    })
  }
  
  render(){
  console.log("Msg: ", this.state.msg)
    return(
      <div>
        <button key='asdf1' onClick={this.tickle}>{this.state.msg}</button>
      </div>
    );
  }
}

