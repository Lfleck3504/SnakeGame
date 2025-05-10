import  ICollisionHandler  from "../collision/ICollisionHandler";
import Snake from "../models/Snake";
import Food from "../models/Food";

export default class SnakeFoodCollisionHandler implements ICollisionHandler {
  applyAction(collider: Snake, collided: Food): void {
    collided.eat();
    collider.grow();
  }
}
