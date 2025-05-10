// import display from "./display";

// place your code on line 5 above the export statement below
import Point from "../utils/Point";
import { IActor } from "../interfaces/IActors";
import { ICollidable } from "../interfaces/ICollidable";
  type Direction = "up" | "down" | "left" | "right";

   
  export class Snake implements ICollidable {
    private parts_: Point[] = [];
    private direction_: string = "right";
    private isCurrentlyActive: boolean = true;
  
    constructor(startPosition: Point, size: number) {
      for (let i = 0; i < size; i++) {
        this.parts_.push(new Point(startPosition.x - i, startPosition.y));
      }
    }
  
    get position(): Point {
      return this.parts_[0];
    }
  
    get parts(): Point[] {
      return this.parts_;
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
      if (this.direction_ === "right") this.parts_[0] = new Point(head.x + 1, head.y);
      else if (this.direction_ === "left") this.parts_[0] = new Point(head.x - 1, head.y);
      else if (this.direction_ === "up") this.parts_[0] = new Point(head.x, head.y - 1);
      else if (this.direction_ === "down") this.parts_[0] = new Point(head.x, head.y + 1);
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
  
  