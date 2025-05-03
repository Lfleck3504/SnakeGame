import { IWorldView } from "./IWorldView";
import WorldModel from "./WorldModel";

export default class CanvasWorldView implements IWorldView {
  private scalingFactor: number;
  private worldCanvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  constructor(scalingFactor: number) {
    this.scalingFactor = scalingFactor;
    this.worldCanvas = document.createElement("canvas");
    this.context = this.worldCanvas.getContext("2d")!;
    document.body.appendChild(this.worldCanvas);
  }

  display(world: WorldModel): void {
    this.worldCanvas.width = world.width * this.scalingFactor;
    this.worldCanvas.height = world.height * this.scalingFactor;

    // Clear the canvas
    this.context.clearRect(0, 0, this.worldCanvas.width, this.worldCanvas.height);

    const snake = world.snake;
    const x = snake.position.x * this.scalingFactor;
    const y = snake.position.y * this.scalingFactor;

    this.context.fillStyle = "green";
    this.context.fillRect(x, y, this.scalingFactor, this.scalingFactor);
  }
}