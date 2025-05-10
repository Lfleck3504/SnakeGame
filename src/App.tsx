import React, { useEffect } from "react";
import "./App.css";
import Game from "./Game"; 

export default function App() {
  useEffect(() => {
    const game = new Game();       // create game with menu and controller
    game.switchContext({});        // start at main menu
  }, []);

  return (
    <div className="App">
      <h1>Snake Game</h1>
      <p>Enter number of players above and press Start Game</p>
    </div>
  );
}
