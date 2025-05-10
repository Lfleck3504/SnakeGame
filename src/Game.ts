import GameController from "./GameController";
import MainMenuController from "./MainMenuController";

export default class Game {
  private contextSwitches = new Map<string, string>();
  private controllers = new Map<string, any>();
  private currentContext: string;

  constructor() {
    // Map flow between contexts
    this.contextSwitches.set("START", "GAME");
    this.contextSwitches.set("GAME", "START");

    // Instantiate both controllers
    this.controllers.set("START", new MainMenuController(this));
    this.controllers.set("GAME", new GameController(this));

    this.currentContext = "START"; // Start at menu
  }

  switchContext(data: any) {
    this.currentContext = this.contextSwitches.get(this.currentContext)!;
    this.controllers.get(this.currentContext).init(data);
  }
}