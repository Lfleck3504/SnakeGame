import { IInputHandler } from "./IInputHandler.js";

export class LRKeyInputHandler implements IInputHandler {
  private wasLeftArrowPushed: boolean = false;
  private wasRightArrowPushed: boolean = false;

  constructor() {
    window.addEventListener("keydown", (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        this.wasLeftArrowPushed = true;
      } else if (event.key === "ArrowRight") {
        this.wasRightArrowPushed = true;
      }
    });
  }

  madeLeftMove(): boolean {
    return this.wasLeftArrowPushed;//  "left arrow" key press
  }

  madeRightMove(): boolean {
    return this.wasRightArrowPushed;//  "right arrow" key press
  }

  resetLeftMove(): void {
    this.wasLeftArrowPushed = false;//  "left arrow" key press ending
  }

  resetRightMove(): void {
    this.wasRightArrowPushed = false;// "right arrow" key press ending
  }
}