import  WorldModel  from "./models/WorldModel";
import Player from "./Player";

export default class GameController {
  private world: WorldModel;
  private player1: Player | null = null;
  private player2: Player | null = null;
  private readonly tickInterval: number = 300; 
  private lastTime: number | null = null;

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
      if (this.lastTime === null) {
        this.lastTime = currentTime;
      }
  
      // Player turns
      this.player1?.makeTurn();
      this.player2?.makeTurn();
  
      // World updates every 500ms
      if (currentTime - this.lastTime >= this.tickInterval) {
        this.world.update(1);
        this.lastTime = currentTime;
      }
  //loooooop
      requestAnimationFrame(updateFrame);
    };
  
    requestAnimationFrame(updateFrame);
  }
}