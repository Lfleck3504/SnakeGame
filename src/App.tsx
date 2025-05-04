import "./App.css";
import { useEffect } from "react";
import Display from "./ConsoleDisplay";
import display from "./display";
import React from "react";
import Snake from "./Snake";
import Point from "./Point";
import "./Point";
import WorldModel from "./WorldModel";
import SnakeController from "./SnakeController";
import AvoidWallsPlayer from "./AvoidWallsPlayer";
import CanvasWorldView from "./CanvasWorldView";
import  Player  from "./Player";
import  {IInputHandler}  from "./IInputHandler";
import  {LRKeyInputHandler}  from "./LRKeyInputHandler";
import  {HumanPlayer}  from "./HumanPlayer";
import  {GameController}  from "./GameController";
export default function App() {
  useEffect(() => {
    // Include your display statements to test below


    const snake1 = new Snake();
    const snake2 = new Snake();
    snake2.turnLeft(); // So it doesn't overlap exactly with snake1
  
    const model = new WorldModel(snake1, 30, 30);
  
    const canvas = new CanvasWorldView(20);
    model.view = canvas;
  
    const controller1 = new SnakeController(model, snake1);
    const controller2 = new SnakeController(model, snake2);
  
    const inputHandler = new LRKeyInputHandler();
    const humanPlayer = new HumanPlayer(controller1, inputHandler);
    const autoPlayer = new AvoidWallsPlayer(controller2);
  
    const game = new GameController(model);
    game.setPlayer1(humanPlayer);
    game.setPlayer2(autoPlayer);
    game.run();

  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Display />
    </div>
  );
}
  

