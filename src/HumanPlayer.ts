import  Player  from "./Player";
import  {IInputHandler}  from "./IInputHandler";
import  SnakeController  from "./SnakeController";

export class HumanPlayer extends Player {
  private input: IInputHandler;

  constructor(controller: SnakeController, inputHandler: IInputHandler) {
    super(controller);
    this.input = inputHandler;
  }

  makeTurn(): void {
    if (this.input.madeLeftMove()) {
      this.sc.turnSnakeLeft();
      this.input.resetLeftMove();
    } else if (this.input.madeRightMove()) {
      this.sc.turnSnakeRight();
      this.input.resetRightMove();
    }
  }
}