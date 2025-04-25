// import display from "./display";

// place your code on line 5 above the export statement below
import Point from "./Point";

  type Direction = "up" | "down" | "left" | "right";

  class Snake {
    
    private currentPosition: Point;
    private currentDirection: Direction;
    
    
    constructor() {
      this.currentPosition = new Point(0, 0);
      this.currentDirection = "right";
    }
  

  
    get Direction(): Direction {
      return this.currentDirection;
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
  

    
  
    public move(): void {
      const x = this.currentPosition.x;
      const y = this.currentPosition.y;
  
      if (this.currentDirection === "up") {
        this.currentPosition = new Point(x, y - 1);
      } else if (this.currentDirection === "down") {
        this.currentPosition = new Point(x, y + 1);
      } else if (this.currentDirection === "left") {
        this.currentPosition = new Point(x - 1, y);
      } else if (this.currentDirection === "right") {
        this.currentPosition = new Point(x + 1, y);
      }
    }


  
  get position(){
    return this.currentPosition
  }
}

  export default Snake;
  