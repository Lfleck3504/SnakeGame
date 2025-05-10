export default interface ICollisionHandler {
    applyAction(collider: any, collided: any): void;
  }