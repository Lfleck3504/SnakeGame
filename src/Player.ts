import SnakeController from "./SnakeController";

abstract class Player {
  protected sc: SnakeController;

  constructor(controller: SnakeController) {
    this.sc = controller;
  }

  abstract makeTurn(): void;
}

export default Player;