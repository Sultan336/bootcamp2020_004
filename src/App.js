import React, {
  useState
} from 'react';
import './App.css';
import {
  Message
} from './message.js';
export default function App() {
  let [count, setCount] = useState(1);
  let [isMorning, setMorning] = useState(true);
  return ( <
    div className = "box" >
    <
    h1 > Have a good {
      isMorning ? 'Morning' : 'Night'
    }! < /h1>

    Message counter = {
      count
    }
    /> <
    br / >
    <
    button onClick = {
      () => setCount(count + 1)
    } > Update counter < /button> < /
    div >
  );
}