export interface IInputHandler {
  madeLeftMove(): boolean;
  madeRightMove(): boolean;
  resetLeftMove(): void;
  resetRightMove(): void;
}