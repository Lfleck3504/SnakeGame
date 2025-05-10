// import display from "./display";

// place your code on line 5 above the export statement below
import Point from "../utils/Point";
import  IActor  from "../interfaces/IActors";
import  ICollidable  from "../interfaces/ICollidable";
type Direction = "up" | "down" | "left" | "right";

   
  export default class Snake implements ICollidable {
    private parts_: Point[] = [];
    private direction_: Direction;
    private isCurrentlyActive: boolean = true;
  
    constructor(startPosition: Point, size: number) {
      this.parts_ = [startPosition];
      for (let i = 1; i < size; i++) {
        this.parts_.push(new Point(startPosition.x - i, startPosition.y));
      }
      this.direction_ = "right";
      this.isCurrentlyActive = true;
    }
  
    get position(): Point {
      return this.parts_[0];
    }
  
    get parts(): Point[] {
      return this.parts_;
    }
  
    get direction(): Direction {
      return this.direction_;
    }


    get isActive(): boolean {
      return this.isCurrentlyActive;
    }
  
    get type(): string {
      return "snake";
    }
  
    move(): void {
      for (let i = this.parts_.length - 1; i > 0; i--) {
        this.parts_[i] = this.parts_[i - 1];
      }
  
      const head = this.parts_[0];
      let newHead: Point;
  
      switch (this.direction_) {
        case "up":
          newHead = new Point(head.x, head.y - 1);
          break;
        case "down":
          newHead = new Point(head.x, head.y + 1);
          break;
        case "left":
          newHead = new Point(head.x - 1, head.y);
          break;
        case "right":
        default:
          newHead = new Point(head.x + 1, head.y);
          break;
      }
  
      this.parts_[0] = newHead;
    }
  
    turnLeft(): void {
      switch (this.direction_) {
        case "up":
          this.direction_ = "left";
          break;
        case "left":
          this.direction_ = "down";
          break;
        case "down":
          this.direction_ = "right";
          break;
        case "right":
          this.direction_ = "up";
          break;
      }
    }
  
    turnRight(): void {
      switch (this.direction_) {
        case "up":
          this.direction_ = "right";
          break;
        case "right":
          this.direction_ = "down";
          break;
        case "down":
          this.direction_ = "left";
          break;
        case "left":
          this.direction_ = "up";
          break;
      }
    }
    update(): void {
      this.move();
    }
  
    grow(): void {
      const tail = this.parts_[this.parts_.length - 1];
      this.parts_.push(new Point(tail.x, tail.y));
    }
  
    die(): void {
      this.isCurrentlyActive = false;
    }
  
    didCollide(other: IActor): boolean {
      if (other.type !== "snake") {
        return this.position.equals((other as any).position);
      } else {
        const otherSnake = other as Snake;
        return otherSnake.parts.some(p => this.position.equals(p));
      }
    }
  }
  
  