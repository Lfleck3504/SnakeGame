import  IWorldView  from "./interfaces/IWorldView";
import  WorldModel  from "./models/WorldModel";
import  Point  from "./utils/Point";
import  {isSnake,isFood,isCollidable} from "./utils/typeGuard";

export default class CanvasWorldView implements IWorldView {
  private readonly canvas: HTMLCanvasElement;
  private readonly ctx: CanvasRenderingContext2D;
  private readonly scale: number;

   constructor(scalingFactor: number) {
    this.scale = scalingFactor;

    this.canvas = document.createElement("canvas");
    this.canvas.width = 600;
    this.canvas.height = 600;
    document.body.appendChild(this.canvas);

    const context = this.canvas.getContext("2d");
    if (!context) throw new Error("Canvas 2D context is not supported.");
    this.ctx = context;
  }

  display(world: WorldModel): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const iter = world.actors;
    let result = iter.next();

    while (!result.done) {
      const actor = result.value;

      if (actor) {
        if (isSnake(actor)) {
          this.ctx.fillStyle = "green";
          actor.parts.forEach((p: Point) => {
            this.ctx.fillRect(p.x * this.scale, p.y * this.scale, this.scale, this.scale);
          });
        } else if (isFood(actor) && actor.isActive) {
          const p = actor.position;
          this.ctx.fillStyle = "red";
          this.ctx.fillRect(p.x * this.scale, p.y * this.scale, this.scale, this.scale);
        }
      }

      result = iter.next();
    }
  }
}