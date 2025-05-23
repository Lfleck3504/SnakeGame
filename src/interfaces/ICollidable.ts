import  IActor  from "../interfaces/IActors";

export default interface ICollidable extends IActor {
  didCollide(actor: IActor): boolean;
  isActive: boolean;
  type: string;
  position: any;
}
