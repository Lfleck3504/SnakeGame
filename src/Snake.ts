// import display from "./display";

// place your code on line 5 above the export statement below
import Point from "./Point";

  type Direction = "up" | "down" | "left" | "right";

   
export default class Snake {
  
  private parts: Point[];
  private currentPosition: Point;
  private currentDirection: Direction;
  
  constructor(startPosition: Point, size: number) {
    this.currentPosition = new Point(0, 0);
    this.currentDirection = "right";
    this.parts = [startPosition];

    for (let i = 1; i < size; i++) {
      this.parts.push(new Point(startPosition.x - i, startPosition.y));
    }
  }
  get Direction(): Direction {
    return this.currentDirection;
  }
  get position(): Point {
    return this.parts[0];
  }

  get allParts(): Point[] {
    return this.parts;
  }
  
    public turnLeft(): void {
      if (this.currentDirection === "up") {
        this.currentDirection = "left";
      } else if (this.currentDirection === "left") {
        this.currentDirection = "down";
      } else if (this.currentDirection === "down") {
        this.currentDirection = "right";
      } else if (this.currentDirection === "right") {
        this.currentDirection = "up";
      }
    }
  
    public turnRight(): void {
      if (this.currentDirection === "up") {
        this.currentDirection = "right";
      } else if (this.currentDirection === "right") {
        this.currentDirection = "down";
      } else if (this.currentDirection === "down") {
        this.currentDirection = "left";
      } else if (this.currentDirection === "left") {
        this.currentDirection = "up";
      }
    }
  

    
  
    move(): void {
      for (let i = this.parts.length - 1; i > 0; i--) {
        this.parts[i] = this.parts[i - 1];
      }
     
    const head = this.parts[0];
    let newHead: Point;
  
      switch (this.currentDirection) {
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
      }
  
      this.parts[0] = newHead;
    }
  
    didCollide(other: Snake): boolean {
      return other
        .allParts
        .some((part, idx) =>
          idx === 0 ? false : this.position.equals(part)
        );
    }
  }



  