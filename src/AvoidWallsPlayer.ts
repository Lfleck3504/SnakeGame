import Player from "./Player";
import SnakeController from "./SnakeController";

class AvoidWallsPlayer extends Player {
  constructor(controller: SnakeController) {
    super(controller);
  }

  makeTurn(): void {
    const pos = this.sc.snakePosition;
    const dir = this.sc.snakeDirection;
    const w = this.sc.worldWidth;
    const h = this.sc.worldHeight;

    const atLeftWall = pos.x === 0;
    const atRightWall = pos.x === w - 1;
    const atTopWall = pos.y === 0;
    const atBottomWall = pos.y === h - 1;

    if (dir === "left" && atLeftWall) {
      if (pos.y <= h / 2) {
        this.sc.turnSnakeRight();
      } else {
        this.sc.turnSnakeLeft();
      }
    } else if (dir === "right" && atRightWall) {
      if (pos.y <= h / 2) {
        this.sc.turnSnakeLeft();
      } else {
        this.sc.turnSnakeRight();
      }
    } else if (dir === "up" && atTopWall) {
      if (pos.x <= w / 2) {
        this.sc.turnSnakeRight();
      } else {
        this.sc.turnSnakeLeft();
      }
    } else if (dir === "down" && atBottomWall) {
      if (pos.x <= w / 2) {
        this.sc.turnSnakeLeft();
      } else {
        this.sc.turnSnakeRight();
      }
    }
  }
}

export default AvoidWallsPlayer;