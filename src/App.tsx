import React, { useEffect } from "react";
import "./App.css";
import "./utils/Point";
import  WorldModel from "./models/WorldModel";
import  CanvasWorldView  from "./CanvasWorldView";
import  Snake  from "./models/Snake";
import  Food  from "./models/Food";
import  Point  from "./utils/Point";
import  ActorCollisionHandlers  from "./collision/ActorCollisionHandlers";
import  SnakeFoodCollisionHandler  from "./collision/FoodCHandler";
import  SnakeSnakeCollisionHandler  from "./collision/SnakeCollisionHandler";
import SnakeController from "./SnakeController";
import HumanPlayer from "./HumanPlayer";
import LRKeyInputHandler from "./LRKeyInputHandler";
import GameController from "./GameController";


export default function App() {
  useEffect(() => {
    // 1. Create the collision handler registry
    const aca = new ActorCollisionHandlers();
    aca.addCollisionAction("snake", "food", new SnakeFoodCollisionHandler());
    aca.addCollisionAction("snake", "snake", new SnakeSnakeCollisionHandler());

    // 2. Create the world model
    const world = new WorldModel(aca);

    // 3. Add views
    const view = new CanvasWorldView(20);
    world.addView(view);

    // 4. Add snakes
    const snake1 = new Snake(new Point(5, 5), 5);
    const snake2 = new Snake(new Point(10, 10), 5);
    world.addActor(snake1);
    world.addActor(snake2);

    // 5. Add food
    const food1 = new Food(7, 5);
    const food2 = new Food(11, 10);
    world.addActor(food1);
    world.addActor(food2);

    // 6. Controller setup
    const snakeController = new SnakeController(world,snake1);
    const inputHandler = new LRKeyInputHandler();
    const humanPlayer = new HumanPlayer(snakeController, inputHandler);

    const game = new GameController(world);
    game.setPlayer1(humanPlayer);




    // 7. Start the game loop
    function gameLoop() {
      world.update(1);
      requestAnimationFrame(gameLoop);
    }

    gameLoop();
  }, []);

  return (
    <div className="App">
      <h1>Snake Game Running</h1>
      <p>Use Left/Right arrow keys to turn Also hi proffesor</p>
    </div>
  );
}