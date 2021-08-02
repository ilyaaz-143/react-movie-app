import { useState } from "react";
import "./App.css";
function Notusing() {
  const [isRed, setisRed] = useState(false);
  const chageState = () => {
    if (isRed) {
      setisRed(false);
    } else {
      setisRed(true);
    }
  };
  return (
    <div className="App">
      <div className={isRed ? "active" : null}></div>
      <button onClick={chageState}>{isRed ? "Hide" : "show"}</button>
    </div>
  );
}

export default Notusing;
