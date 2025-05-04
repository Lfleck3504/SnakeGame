import WorldModel from "./WorldModel";
import Player from "./Player";

export class GameController {
  private world: WorldModel;
  private player1: Player | null = null;
  private player2: Player | null = null;
  private lastTime = 0;

  constructor(world: WorldModel) {
    this.world = world;
  }

  setPlayer1(player: Player) {
    this.player1 = player;
  }

  setPlayer2(player: Player) {
    this.player2 = player;
  }

  run() {
    const updateFrame = (currentTime: number) => {
      if (this.player1) this.player1.makeTurn();
      if (this.player2) this.player2.makeTurn();

      if (currentTime - this.lastTime > 250) {
        this.world.update(1);
        this.lastTime = currentTime;
      }

      requestAnimationFrame(updateFrame);
    };

    requestAnimationFrame(updateFrame);
  }
}