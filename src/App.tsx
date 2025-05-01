import "./App.css";
import { useEffect } from "react";
import Display from "./ConsoleDisplay";
import display from "./display";
import React from "react";
import Snake from "./Snake";
import Point from "./Point";
import "./Point";
import WorldModel from "./WorldModel";



export default function App() {
  useEffect(() => {
    // Include your display statements to test below
    const mySnake = new Snake();
    const world = new WorldModel(mySnake);

    console.log("Before update:", mySnake.position);

    world.update(3);
    document.getElementById("output")!.innerText = "OUTPUT:\n";
    const snake1 = new Snake();
    console.log(`Initial Point: (${snake1.position.x}, ${snake1.position.y})`);

    snake1.move();
    console.log(`After 1 move: (${snake1.position.x}, ${snake1.position.y})`);
    
    snake1.turnLeft(); 
    snake1.move();
    console.log(`After turn and move: (${snake1.position.x}, ${snake1.position.y})`);
    
    snake1.turnLeft();
    snake1.move();
    console.log(`After another turn and move: (${snake1.position.x}, ${snake1.position.y})`);
    console.log("After update (3 steps):", mySnake.position);
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Display />
    </div>
  );
}

