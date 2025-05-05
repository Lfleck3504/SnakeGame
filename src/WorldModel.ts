import Snake from "./Snake";
import { IWorldView } from "./IWorldView";

export default class WorldModel {
  private allSnakes: Snake[];
  private allViews: IWorldView[];
  private _width: number;
  private _height: number;

  constructor() {
    this.allSnakes = [];
    this.allViews = [];
    this._width = 30; // default world size, can be changed
    this._height = 30;
  }

  // Add snakes and views dynamically
  addSnake(s: Snake): void {
    this.allSnakes.push(s);
  }

  addView(v: IWorldView): void {
    this.allViews.push(v);
  }

  // Getters
  get width(): number {
    return this._width;
  }

  get height(): number {
    return this._height;
  }

  get snakes(): Snake[] {
    return this.allSnakes;
  }

  update(steps: number): void {
    for (let i = 0; i < steps; i++) {
      this.allSnakes.forEach(snake => snake.move());

      // Check for collisions
      const snakesToRemove: Snake[] = [];
      this.allSnakes.forEach(snake => {
        this.allSnakes.forEach(other => {
          if (
            snake.didCollide(other) &&
            !snakesToRemove.includes(snake)
          ) {
            snakesToRemove.push(snake);
          }
        });
      });

      // Remove collided snakes
      this.allSnakes = this.allSnakes.filter(
        snake => !snakesToRemove.includes(snake)
      );
    }

    // Notify all views to render
    this.allViews.forEach(view => view.display(this));
  }
}
