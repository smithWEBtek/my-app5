import React, { Component } from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  tick(){
    this.setState({
      date: new Date(),
    })
  }
   

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 2,
    );
    // console.log('timerID DidMount: ', this.timerID)
  }
  
  componentWillUnmount(){
    clearInterval(this.timerID)
    // console.log("componentWillUnMount....")
  }
  
  componentWillMount(){
    // console.log("componentWillMount....")
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
