import Snake from "./Snake";
import { IWorldView } from "./IWorldView";

class WorldModel {
  private snake_: Snake;
  private _worldWidth: number;
  private _worldHeight: number;
  private worldView: IWorldView | null = null;
 
  constructor(snake: Snake, width: number = 20, height: number = 20) {
    this.snake_ = snake;
    this._worldWidth = width;
    this._worldHeight = height;
  }

  get snake(): Snake {
    return this.snake_;
  }
  get width(): number {
    return this._worldWidth;
  }

  get height(): number {
    return this._worldHeight;
   } 
    
  set view(view: IWorldView) {
    this.worldView = view;
  }
  update(steps: number): void {
    for (let i = 0; i < steps; i++) {
      this.snake.move();
    }
    if (this.worldView) {
      this.worldView.display(this);
    }
  }
}

export default WorldModel;