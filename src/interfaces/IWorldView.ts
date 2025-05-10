import  WorldModel  from "../models/WorldModel";

export default interface IWorldView {
  display(world: WorldModel): void;
  dispose(): void;
}