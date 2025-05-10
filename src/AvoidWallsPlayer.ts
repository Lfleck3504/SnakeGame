import Player from "./Player";
import SnakeController from "./SnakeController";

class AvoidWallsPlayer extends Player {
  constructor(controller: SnakeController) {
    super(controller);
  }

  makeTurn(): void {
    const pos = this.controller.snakePosition;
    const dir = this.controller.snakeDirection;
    const w = this.controller.worldWidth;
    const h = this.controller.worldHeight;

    const atLeftWall = pos.x === 1;
    const atRightWall = pos.x === w - 1;
    const atTopWall = pos.y === 1;
    const atBottomWall = pos.y === h - 1;

    if (dir === "left" && atLeftWall) {
      if (pos.y <= h / 2) {
        this.controller.turnSnakeRight();
      } else {
        this.controller.turnSnakeLeft();
      }
    } else if (dir === "right" && atRightWall) {
      if (pos.y <= h / 2) {
        this.controller.turnSnakeLeft();
      } else {
        this.controller.turnSnakeRight();
      }
    } else if (dir === "up" && atTopWall) {
      if (pos.x <= w / 2) {
        this.controller.turnSnakeRight();
      } else {
        this.controller.turnSnakeLeft();
      }
    } else if (dir === "down" && atBottomWall) {
      if (pos.x <= w / 2) {
        this.controller.turnSnakeLeft();
      } else {
        this.controller.turnSnakeRight();
      }
    }
  }
}

export default AvoidWallsPlayer;