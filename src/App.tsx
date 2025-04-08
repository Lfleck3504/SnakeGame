import "./App.css";
import { useEffect } from "react";
import Display from "./ConsoleDisplay";
import display from "./display";
import React from "react";
import Snake from "./Snake";

export default function App() {
  useEffect(() => {
    // Include your display statements to test below
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    const snake1 = new Snake();
    console.log(`Initial Position:` {snake1.position}); // Expected: 0

    snake1.move(5);
    console.log(`After moving 5:` {snake1.position}); // Expected: 5

    snake1.turn();
    snake1.move(3);
    console.log(`After turning and moving 3: `{snake1.position}); // Expected: 2

    snake1.turn();
    snake1.move(2);
    console.log(`After turning and moving 2:` {snake1.position}); // Expected: 4>
    ;

    display("hey");
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Display />
    </div>
  );
}




export default App;