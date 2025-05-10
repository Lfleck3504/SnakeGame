import { ICollisionHandler } from "./ICollisionHandler";

export class ActorCollisionHandlers {
  private pairs: Map<string, ICollisionHandler> = new Map();

  private toKey(colliderType: string, collidedType: string): string {
    return `${colliderType},${collidedType}`;
  }

  addCollisionAction(
    colliderType: string,
    collidedType: string,
    actionApplicator: ICollisionHandler
  ): void {
    this.pairs.set(this.toKey(colliderType, collidedType), actionApplicator);
  }

  hasCollisionAction(colliderType: string, collidedType: string): boolean {
    return this.pairs.has(this.toKey(colliderType, collidedType));
  }

  applyCollisionAction(collider: any, collided: any): void {
    const key = this.toKey(collider.type, collided.type);
    const handler = this.pairs.get(key);
    if (handler) handler.applyAction(collider, collided);
  }
}
