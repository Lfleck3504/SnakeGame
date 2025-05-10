import Player from "./Player";
import SnakeController from "./SnakeController";

export default class AvoidWallsPlayer extends Player {
  constructor(controller: SnakeController) {
    super(controller);
  }

  makeTurn(): void {
    const pos = this.controller.snakePosition;
    const dir = this.controller.snakeDirection;
    const width = this.controller.worldWidth;
    const height = this.controller.worldHeight;

    const inTopHalf = pos.y <= height / 2;
    const inLeftHalf = pos.x <= width / 2;


  if (dir === "left" && pos.x === 0) {
      inTopHalf ? this.controller.turnSnakeRight() : this.controller.turnSnakeLeft();
    } else if (dir === "right" && pos.x === width - 1) {
      inTopHalf ? this.controller.turnSnakeLeft() : this.controller.turnSnakeRight();
    } else if (dir === "up" && pos.y === 0) {
      inLeftHalf ? this.controller.turnSnakeRight() : this.controller.turnSnakeLeft();
    } else if (dir === "down" && pos.y === height - 1) {
      inLeftHalf ? this.controller.turnSnakeLeft() : this.controller.turnSnakeRight();
    }
  }
}
