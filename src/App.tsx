import "./App.css";
import { useEffect } from "react";
import Display from "./ConsoleDisplay";
import display from "./display";
import React from "react";
import "./utils/Point";
import SnakeController from "./SnakeController";
import AvoidWallsPlayer from "./AvoidWallsPlayer";
import  Player  from "./Player";
import  {IInputHandler}  from "./IInputHandler";
import  {LRKeyInputHandler}  from "./LRKeyInputHandler";
import  {HumanPlayer}  from "./HumanPlayer";
import  {GameController}  from "./GameController";
import  {WorldModel}  from "./models/WorldModel";
import { CanvasWorldView } from "./CanvasWorldView";
import { Snake } from "./models/Snake";
import { Food } from "./models/Food";
import  Point  from "./utils/Point";
import { ActorCollisionHandlers } from "./collision/ActorCollisionHandlers";
import { SnakeFoodCollisionHandler } from "./collision/FoodCHandler";
import { SnakeSnakeCollisionHandler } from "./collision/SnakeCollisionHandler";

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

// 6. Start the game loop
function gameLoop() {
  world.update(1);
  requestAnimationFrame(gameLoop);
}

gameLoop();


