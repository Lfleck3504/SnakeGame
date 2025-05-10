import  Player  from "./Player";
import  IInputHandler  from "./interfaces/IInputHandler";
import  SnakeController  from "./SnakeController";

export default class HumanPlayer extends Player {
  private input: IInputHandler;

  constructor(controller: SnakeController, inputHandler: IInputHandler) {
    super(controller);
    this.input = inputHandler;
  }

  makeTurn(): void {
    if (this.input.madeLeftMove()) {
      console.log("Left input received");//testing if the input is logging
      this.controller.turnSnakeLeft();
      this.input.resetLeftMove();
    } else if (this.input.madeRightMove()) {
      console.log("Right input received");//testing if the input is logging
      this.controller.turnSnakeRight();
      this.input.resetRightMove();
    }
  }
}