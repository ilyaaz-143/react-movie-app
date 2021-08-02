import { useState } from "react";
import styled from "styled-components";
import "./App.css";
function App() {
  const [isState, setState] = useState(false);
  const Button = styled.button`
    background-color: ${isState ? "green" : "blue"};
    color: orange;
    border: 1px solid black;
    border-radius: 10px;
  `;
  const chage = () => {
    if (isState) {
      setState(false);
    } else setState(true);
  };
  return (
    <div className="App">
      <Button onClick={chage}>Hello</Button>
    </div>
  );
}

export default App;
