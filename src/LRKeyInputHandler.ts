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
    return this.wasLeftArrowPushed;
  }

  madeRightMove(): boolean {
    return this.wasRightArrowPushed;
  }

  resetLeftMove(): void {
    this.wasLeftArrowPushed = false;
  }

  resetRightMove(): void {
    this.wasRightArrowPushed = false;
  }
}