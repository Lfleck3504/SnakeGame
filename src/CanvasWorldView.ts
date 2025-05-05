import { IWorldView } from "./IWorldView";
import WorldModel from "./WorldModel";
import Point from "./Point";

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

    this.context.fillStyle = "black";
    this.context.fillRect(0, 0, this.worldCanvas.width, this.worldCanvas.height);

    this.context.fillStyle = "lime";
    world.snakes.forEach(snake => {
      snake.allParts.forEach((part: Point) => {
        this.context.fillRect(
          part.x * this.scalingFactor,
          part.y * this.scalingFactor,
          this.scalingFactor,
          this.scalingFactor
        );
      });
    });
  }
}