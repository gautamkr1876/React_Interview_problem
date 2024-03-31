import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SelectableGrid from "./SelectableGrid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Selectable Grid</div>
      <SelectableGrid rows={10} cols={10} />
    </>
  );
}

export default App;
