import {Snake} from "../models/Snake";
import { ICollisionHandler } from "./ICollisionHandler";


export class SnakeSnakeCollisionHandler implements ICollisionHandler {
  applyAction(collider: Snake, collided: Snake): void {
    collider.die();
  }
}
