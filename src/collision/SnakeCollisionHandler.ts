import Snake from "../models/Snake";
import  ICollisionHandler  from "../collision/ICollisionHandler";


export default class SnakeSnakeCollisionHandler implements ICollisionHandler {
  applyAction(collider: Snake, collided: Snake): void {
    collider.die();
  }
}
