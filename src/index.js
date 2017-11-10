import React from 'react';
import ReactDOM from 'react-dom'
import Clicker from './Components/Clicker'
import Clock from './Components/Clock'
import Message from './Components/Message'
import Tickle from './Components/Tickle'

const MOUNT2 = document.querySelector('#root2');
const MOUNT3 = document.querySelector('#root3');
const MOUNT4 = document.querySelector('#root4');
const MOUNT5 = document.querySelector('#root5');

ReactDOM.render(
  <Tickle
    msg='msg from index.js'
  />,
  MOUNT2
);

ReactDOM.render(
  <Clicker 
  />,
  MOUNT3
);

ReactDOM.render(
  <Message 
    msg='default index props msg'
  />,
  MOUNT4
);

ReactDOM.render(
  <div>
    <Clock />
  </div>,
  MOUNT5
);
