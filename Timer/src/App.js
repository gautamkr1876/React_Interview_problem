import { useState } from "react";
import "./styles.css";
let count;
export default function App() {
  const [timer, setTimer] = useState(0);
  const [flag, setFlag] = useState(false);
  function Start() {
    setFlag(true);
    count = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  }
  function Pause() {
    if (flag) {
      clearInterval(count);
    }
  }
  function Stop() {
    setTimer(0);
    if (flag) {
      clearInterval(count);
    }
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input type="button" value="Start" onClick={Start} />
      <input type="button" value="Stop" onClick={Stop} />
      <input type="button" value="pause" onClick={Pause} />
      <input type="button" value="resume" />
      <p> timer :- {timer}</p>
    </div>
  );
}
