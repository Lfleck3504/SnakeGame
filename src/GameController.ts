import  WorldModel  from "./models/WorldModel";
import Player from "./Player";

export default class GameController {
  private world: WorldModel;
  private player1: Player | null = null;
  private player2: Player | null = null;
  private lastTime: number | null = null; //

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
      // 1. Let each player decide a move
      if (this.player1) this.player1.makeTurn();
      if (this.player2) this.player2.makeTurn();

      // 2. On first frame, initialize the clock
      if (this.lastTime === null) {
        this.lastTime = currentTime;
      }

      // 3. Update the world at a fixed interval (e.g., every 250 ms)
      if (currentTime - this.lastTime >= 250) {
        this.world.update(1);
        this.lastTime = currentTime;
      }

      // 4. Keep looping
      requestAnimationFrame(updateFrame);
    };

    requestAnimationFrame(updateFrame);
  }
}