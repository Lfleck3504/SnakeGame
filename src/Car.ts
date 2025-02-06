import display from "./display";
// import IDrivable from "./IDrivable";

// place your code on line 5 above the export statement below

class Car {
  public totalMiles: number;
  public color: string;
  constructor(carColor:string) {
    this.totalMiles = 0;
    this.color = carColor;
  }
  drive(miles:number) {
    display("The", this.color, "car goes VROOOOOOOMMMMMM....");
    this.totalMiles = this.totalMiles + miles;
  }
}

export default Car;
