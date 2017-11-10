import React, { Component } from 'react';

export default class Message extends Component { 
  constructor(props){
    super(props);
    this.state = {
      msg: this.props.msg,
    }
  }

  updateMsg(e){
    this.setState({
      msg: e.target.value
    })
  }
  
  render() {
    return (
      <input value={this.state.msg} onChange={this.updateMsg.bind(this)}/>
    );
  }
}
