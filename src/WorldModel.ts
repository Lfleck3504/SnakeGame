import Snake from "./Snake";

class WorldModel {
  private snake_: Snake;

  constructor(snake: Snake) {
    this.snake_ = snake;
  }

  update(steps: number): void {
    for (let i = 0; i < steps; i++) {
      this.snake_.move();
    }
  }

  get snake(): Snake {
    return this.snake_;
  }
}

export default WorldModel;