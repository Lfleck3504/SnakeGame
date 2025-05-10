import  IInputHandler  from "./interfaces/IInputHandler";

export default class LRKeyInputHandler implements IInputHandler {
  private left = false;
  private right = false;

  constructor() {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") this.left = true;
      if (e.key === "ArrowRight") this.right = true;
    });
  }

  madeLeftMove(): boolean {
    return this.left;
  }

  madeRightMove(): boolean {
    return this.right;
  }

  resetLeftMove(): void {
    this.left = false;
  }

  resetRightMove(): void {
    this.right = false;
  }
}