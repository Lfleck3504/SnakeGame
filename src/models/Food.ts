import  Point  from "../utils/Point";
import  {IActor}  from "../interfaces/IActors";

export class Food implements IActor {
  private currentPosition: Point;
  private isCurrentlyActive: boolean;

  constructor(x: number, y: number) {
    this.currentPosition = new Point(x, y);
    this.isCurrentlyActive = true;
  }

  eat() {
    this.isCurrentlyActive = false;
  }

  get position() {
    return this.currentPosition;
  }

  get isActive() {
    return this.isCurrentlyActive;
  }

  get type() {
    return "food";
  }

  update() {}
}