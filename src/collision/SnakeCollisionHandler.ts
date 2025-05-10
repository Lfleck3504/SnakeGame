import Snake from "../models/Snake";
import  ICollisionHandler  from "../collision/ICollisionHandler";


export default class SnakeCollisionHandler implements ICollisionHandler {
  applyAction(collider: Snake, collided: Snake): void {
    collider.die();
  }
}
