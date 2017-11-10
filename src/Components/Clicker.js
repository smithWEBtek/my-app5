import React, { Component } from 'react';

export default class Clicker extends React.Component {
  
   handleClick = (event) => {
     console.log(event.type); // prints 'click'
   }
  
   render() {
     return (
       <button onClick={this.handleClick}>Click counter!</button>
     );
   }
 }