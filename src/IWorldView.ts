import WorldModel from "./WorldModel";

export interface IWorldView {
  display(world: WorldModel): void;
}