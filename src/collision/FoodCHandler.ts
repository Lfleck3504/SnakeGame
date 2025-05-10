import { ICollisionHandler } from "./ICollisionHandler";
import {Snake} from "../models/Snake";
import {Food} from "../models/Food";

export class SnakeFoodCollisionHandler implements ICollisionHandler {
  applyAction(collider: Snake, collided: Food): void {
    collided.eat();
    collider.grow();
  }
}
