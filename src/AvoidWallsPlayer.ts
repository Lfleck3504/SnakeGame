import Player from "./Player";
import SnakeController from "./SnakeController";
import Point from "./utils/Point";

export default class AvoidWallsPlayer extends Player {
  constructor(controller: SnakeController) {
    super(controller);
  }

  makeTurn(): void {
    const pos = this.controller.snakePosition;
    const dir = this.controller.snakeDirection;
    const width = this.controller.worldWidth;
    const height = this.controller.worldHeight;
    const parts = this.controller.snakeParts; 
  
    const head = pos;
    const next = this.getNextPosition(head, dir);
  
    // If the next step would collide with self, turn
    const hitsSelf = parts.slice(1).some(p => p.equals(next));
  
    if (hitsSelf || this.isHeadingIntoWall(head, dir, width, height)) {
      
      const leftDir = this.turnLeft(dir);
      const leftNext = this.getNextPosition(head, leftDir);
      const leftSafe = !parts.some(p => p.equals(leftNext)) && !this.isHeadingIntoWall(head, leftDir, width, height);
  
      if (leftSafe) {
        this.controller.turnSnakeLeft();
      } else {
        this.controller.turnSnakeRight();
      }
    }
  }
  
  // simulates next position
  private getNextPosition(pos: Point, dir: string): Point {
    if (dir === "up") return new Point(pos.x, pos.y - 1);
    if (dir === "down") return new Point(pos.x, pos.y + 1);
    if (dir === "left") return new Point(pos.x - 1, pos.y);
    return new Point(pos.x + 1, pos.y); // right
  }
  
  private turnLeft(dir: string): string {
    return { up: "left", left: "down", down: "right", right: "up" }[dir]!;
  }
  
  private isHeadingIntoWall(pos: Point, dir: string, width: number, height: number): boolean {
    const next = this.getNextPosition(pos, dir);
    return next.x < 0 || next.y < 0 || next.x >= width || next.y >= height;
  }

}