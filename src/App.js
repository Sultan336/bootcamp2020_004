import React, {
  useState
} from 'react';
import './App.css';
export default function App() {
  let [count, setCount] = useState(1);
  return ( <
    div >
    <
    h3 > value of counter variable is: {
      count
    } < /h3> <
    br / >
    <
    button onClick = {
      () => setCount(2)
    } > Update counter < /button> < /
    div >
  );
}