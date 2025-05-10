import  IActor  from "../interfaces/IActors";
import  IWorldView  from "../interfaces/IWorldView";
import  ICollidable  from "../interfaces/ICollidable";
import  ActorCollisionHandlers  from "../collision/ActorCollisionHandlers";
import  {isCollidable}  from "../utils/typeGuard";
import  ArrayIterator  from "../utils/ArrayIterator";

export default class WorldModel {
  private allActors: IActor[] = [];
  private allViews: IWorldView[] = [];
  private collisionHandlers: ActorCollisionHandlers;
  public width: number = 30;
  public height: number = 30;

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
    // Filter out dead collidable actors
this.allActors = this.allActors.filter(actor => {
  return !(isCollidable(actor) && !actor.isActive);
});

// Check if we need to spawn food
const foodLeft = this.allActors.filter(a => a.type === "food" && a.isActive).length;
if (foodLeft === 0) {
  const randX = Math.floor(Math.random() * this.width);
  const randY = Math.floor(Math.random() * this.height);
  const Food = require("../models/Food").default;
  this.addActor(new Food(randX, randY));
}

  this.allViews.forEach(view => view.display(this));
}
reset(): void {
  this.allViews.forEach(view => view.dispose()); // Clean up views
  this.allViews = [];
  this.allActors = [];
}

}
