import React, {
  useState
} from 'react';
import './App.css';
import {
  Message
} from './message.js';
export default function App() {
  let [count, setCount] = useState(1);
  return ( <
    div >
    <
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