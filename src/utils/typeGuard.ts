import  IActor  from "../interfaces/IActors";
import  ICollidable  from "../interfaces/ICollidable";
import  Snake  from "../models/Snake";
import  Food  from "../models/Food";

export function isCollidable(actor: IActor): actor is ICollidable {
    return "didCollide" in actor && "type" in actor && "isActive" in actor;
  }
  export function isSnake(actor: IActor): actor is Snake {
    return (actor as Snake).type === "snake";
  }
  
  export function isFood(actor: IActor): actor is Food {
    return (actor as Food).type === "food";
  }