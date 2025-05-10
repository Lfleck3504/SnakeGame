import WorldModel from "./models/WorldModel";
import Player from "./Player";
import Game from "./Game";
import ActorCollisionHandlers from "./collision/ActorCollisionHandlers";
import SnakeFoodCollisionHandler from "./collision/FoodCHandler";
import SnakeCollisionHandler from "./collision/SnakeCollisionHandler";
import Snake from "./models/Snake";
import Point from "./utils/Point";
import SnakeController from "./SnakeController";
import HumanPlayer from "./HumanPlayer";
import AvoidWallsPlayer from "./AvoidWallsPlayer";
import LRKeyInputHandler from "./LRKeyInputHandler";
import CanvasWorldView from "./CanvasWorldView";
import WorldLoader from "./WorldLoader";

export default class GameController {
  private game: Game;
  private world: WorldModel;
  private players: Player[] = [];
  private readonly tickInterval: number = 300;
  private lastTime: number | null = null;

  constructor(g: Game) {
    this.game = g;
    const handlers = new ActorCollisionHandlers();
    handlers.addCollisionAction("snake", "food", new SnakeFoodCollisionHandler());
    handlers.addCollisionAction("snake", "snake", new SnakeCollisionHandler());
    this.world = new WorldModel(handlers);
    this.world.width = 30;
    this.world.height = 30;
  }

  init(data: { numOfHumanPlayers: number; numOfAIPlayers: number }) {
    const spacing = 10;
    let count = 0;

    // Add human players
    for (let i = 0; i < data.numOfHumanPlayers; i++) {
      const snake = new Snake(new Point(spacing * count, spacing * count), 5);
      const controller = new SnakeController(this.world, snake);
      const input = new LRKeyInputHandler();
      const player = new HumanPlayer(controller, input);
      this.world.addActor(snake);
      this.players.push(player);
      count++;
    }

    // Add AI players
    for (let i = 0; i < data.numOfAIPlayers; i++) {
      const snake = new Snake(new Point(spacing * count, spacing * count), 5);
      const controller = new SnakeController(this.world, snake);
      const player = new AvoidWallsPlayer(controller);
      this.world.addActor(snake);
      this.players.push(player);
      count++;
    }

    // Add canvas view
    const view = new CanvasWorldView(20);
    this.world.addView(view);

    // Load starter food with WorldLoader
    const loader = new WorldLoader();
    loader.readData([
      "    f     ",
      "       f  ",
      "  f       ",
      "     f    "
    ], this.world);

    this.run();
  }

  run() {
    const drawFrame = (currentTime: number) => {
      if (this.lastTime === null) {
        this.lastTime = currentTime;
      }

      this.players.forEach(player => {
        if (player.isActive()) {
          player.makeTurn();
        }
      });

      if (currentTime - this.lastTime >= this.tickInterval) {
        this.world.update(1);
        this.lastTime = currentTime;
      }

      const activePlayers = this.players.filter(player => player.isActive());
      if (activePlayers.length > 1) {
        requestAnimationFrame(drawFrame);
      } else {
        this.players = [];
        this.world.reset();
        this.game.switchContext({});
      }
    };

    requestAnimationFrame(drawFrame);
  }

  getWorld(): WorldModel {
    return this.world;
  }
}
