import  {WorldModel}  from "../models/WorldModel";

export interface IWorldView {
  display(world: WorldModel): void;
}