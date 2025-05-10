import SnakeController from "./SnakeController";

export default abstract class Player {
  protected controller: SnakeController;

  constructor(controller: SnakeController) {
    this.controller = controller;
  }

  abstract makeTurn(): void;
  isActive(): boolean {
    return this.controller.isSnakeActive;
  }
}

