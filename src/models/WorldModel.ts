import { IActor } from "../interfaces/IActors";
import { IWorldView } from "../interfaces/IWorldView";
import { ICollidable } from "../interfaces/ICollidable";
import { ActorCollisionHandlers } from "../collision/ActorCollisionHandlers";
import { isCollidable } from "../utils/typeGuard";
import { ArrayIterator } from "../utils/ArrayIterator";

export class WorldModel {
  private allActors: IActor[] = [];
  private allViews: IWorldView[] = [];
  private collisionHandlers: ActorCollisionHandlers;
  public width: number = 20;
  public height: number = 20;

  constructor(collisionHandlers: ActorCollisionHandlers) {
    this.collisionHandlers = collisionHandlers;
  }

  addActor(a: IActor) {
    this.allActors.push(a);
  }

  addView(v: IWorldView) {
    this.allViews.push(v);
  }

  get actors() {
    return new ArrayIterator(this.allActors);
  }

  get actorsArray() {
    return this.allActors;
  }

  update(steps: number) {
    for (let i = 0; i < steps; i++) {
      this.allActors.forEach(actor => actor.update());

      const collidedActors: IActor[] = [];

      for (const a of this.allActors) {
        if (!isCollidable(a) || !a.isActive) continue;

        for (const b of this.allActors) {
          if (a !== b && a.didCollide(b)) {
            if (!collidedActors.includes(a)) {
              collidedActors.push(a);
            }
            this.collisionHandlers.applyCollisionAction(a, b);
          }
        }
      }

      this.allActors = this.allActors.filter(actor => {
        return !(isCollidable(actor) && !actor.isActive);
      });
    }

    this.allViews.forEach(view => view.display(this));
  }
}
