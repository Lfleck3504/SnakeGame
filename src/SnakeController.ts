import  WorldModel  from "./models/WorldModel";
import Snake from "./models/Snake";
import  Point  from "./utils/Point";

export default class SnakeController {
  private snakeWorld: WorldModel;
  private slitherer: Snake;

  constructor(world: WorldModel, snake: Snake) {
    this.snakeWorld = world;
    this.slitherer = snake;
  }
  get isSnakeActive(): boolean {
    return this.slitherer.isActive;
  }
  turnSnakeLeft(): void {
    this.slitherer.turnLeft();
  }

  turnSnakeRight(): void {
    this.slitherer.turnRight();
  }

  get snakePosition() {
    return this.slitherer.position;
  }

  get snakeParts(): Point[] {
    return this.slitherer.parts;
  }

  get snakeDirection() {
    return this.slitherer.direction;
  }

  get worldWidth() {
    return this.snakeWorld.width;
  }

  get worldHeight() {
    return this.snakeWorld.height;
  }
}

